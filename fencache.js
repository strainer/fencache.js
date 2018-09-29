// fencache.js : memoize functions with a limited size cache  + 
/*        Copyright 2018 by Andrew Strain. No warranty        * 
 *  This program can be redistributed and modified under the  * 
 *   terms of the MIT License - see License.txt for details   * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ** */

var fencache = function(fn,rn,hs){ return (function(fn,rn,hs){
    
  //init key hash options
  var idk, id = function(k){return k}

  var h=typeof(hs)
  if(h==='number'&&rn<1){ id = function(k){return ""+k} }
  else if((h==='undefined' && rn<1)||h==='object'){ 
    var seed=((new Date()).getTime()-1.3e+12)*Math.random()
    seed=(seed-Math.floor(seed))*57.975

    id=function(k){ 
      if(typeof(k)==='number') return ""+k
      if(typeof(k)==='string') return k 
      k=JSON.stringify(k)
      
      var a=seed ,b=39.993 ,c=0.535 ,d=0 ,e=0 
      var n=k.length-k.length%2 ,i=0

      while(i<n){ //this jagoff's dual double cut&carry hash
        d=k.charCodeAt(i++), e=k.charCodeAt(i++) 
        b=c*(b+d) ,a=c*(a+e)
        c=( b-(b>>>0)+ a-(a>>>0) )*0.515	
      } 
      if(n!=k.length){ b=c*(b+k.charCodeAt(n)) }	
              
      return ""+Math.floor(a*1e13)+""+Math.floor(b*1e13)
    }
  }
  
  var key, val, bv, rc=0, re=0
  
  //init memory in native object
  if(rn<1){
    var stow={}, fill=0, fills=function(){}
    
    if(rn<0){ //limit stow size
      rn=0-rn
      fills=function(){
        if(fill++>rn){
          var hlfng=rn>>>1
          for(var prop in stow) if(stow.hasOwnProperty(prop)){
            delete stow[prop]
            if(--fill<hlfng) break
          }
    }	}	}
     
    function nat(k,p1,p2,p3,p4,p5,p6,p7){
      if(stow[idk=id(k)]) return stow[idk] 
      fills()
      return stow[idk]=fn(k,p1,p2,p3,p4,p5,p6,p7)
    } 
     
    nat.state=function(){ return stow }
    nat.reset=function(s){ stow=s||{} }
    nat.put=function(k,v){ 
      bv=stow[idk=id(k)]; stow[idk]=v
      if(bv===undefined){ fills() } 
      return bv }
    nat.val=function(k){ return stow[id(k)] }
    return nat
  }
  
  //init memory of last value only
  if(rn===1) { 
    
    function last(idk,p1,p2,p3,p4,p5,p6,p7){
      if(key===idk){ return val }
      else{ 
        key=idk
        return val=fn(idk,p1,p2,p3,p4,p5,p6,p7) 
      }
    }
    
    last.reset=function(s){ 
      if(s){ key=s.key ; val=s.val }else{ key=val=undefined } }
    last.state=function()   { return {key,val} }
    last.put  =function(k,v){ bv=val,val=v,key=id(k) ; return bv }
    last.val  =function(k)  { if(key===id(k)) return val }
    return last
  } 
    
  rc= 0, rn= rn||10, re=rn-1 
  key= new Array(rn), val= new Array(rn)
  
  //init memory in a bubbly cyclic ring overflow buffer

  ring.reset=function(s){ 
    if(s){ key=s.key, val=s.val, rc=s.rc, fill=s.fill }
    else{rc=0, key=new Array(rn), val=new Array(rn), fill=1} }
  ring.state=function(){ return {key,val,rc,fill} }
  ring.val=val
  ring.pu=put
  return ring

  function val(k){
    var idk=id(k)
    if(key[rc]===idk){ return v }
    var f=scanrest(idk)
    if(f!=-1){ return val[f] }
  } 

  function put(k,v){
    var idk=id(k)
    if(key[rc]===idk) { bv=val[rc],val[rc]=v ; return v }
    var f=scanrest(idk)
    if(f==-1){ rc=decr(rc) ; key[rc]=idk,val[rc]=v }
    else{ bv=val[rc],val[f]=v ; return v }
  }

  function ring(k,p1,p2,p3,p4,p5,p6,p7){
    var idk=id(k)
    if(key[rc]===idk) { return val[rc] }
    var c=scanrest(idk)
    if(c!=-1){
      var v=val[c]  ,d=decr(c)
      key[c]=key[d] ,val[c]=val[d]
      key[d]=idk    ,val[d]=v  //raise found element
      return v
    } 
 
    key[ rc=decr(rc) ]=idk
    return val[rc]=fn(k,p1,p2,p3,p4,p5,p6,p7) //put result in new head
  } 
    
  function scanrest(idk){ //note rc has been checked already
    for(var i=rc+1; i<rn; i++) if(key[i]===idk) return i
    if(fill){ 
      if(rc!==0) return -1 //rc is never 0 until full
      fill=0 
    } 
    for(i=0; i<rc; i++) if(key[i]===idk) return i 
    return -1
  }
  
  function decr(c){ return c===0?re:c-1 }
  function incr(c){ return c===re?0:c+1 }
  
}(fn,rn,hs)) }
  
if(typeof module!=='undefined' && module.exports) module.exports = fencache
else if(window) window.fencache = fencache
else console.log("fencache.js did not import")

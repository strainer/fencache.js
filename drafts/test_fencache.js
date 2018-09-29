/// tyranical test script

if(typeof window ==='undefined'){
  require ('./xlib/mutil.js')
  fencache=require ('../fencache.js')
  _=require ('./xlib/underscore.js')
  memoiz=require ('./xlib/fastmemo.js')
  Fdrandom=require ('./xlib/Fdrandom.js')
  window=global
}


//~ var r=1,s=JSON.stringify({Fdrandom})
//~ for(var c=0;c<s.length;r=(r+s.charCodeAt(c++)||7.53)*0.21); return r

//~ console.log(s,r)
//~ return

/// test control arrays 
testarlen=1000
a1000r100e = Fdrandom.bulk( 
  testarlen 
 //~ ,function(){ return Math.floor(Fdrandom.gnorm(-10,10)) } 
 //~ ,function(){ return Math.floor(Fdrandom.gnorm(-100,100)) } 
 ,function(){ return Math.floor(Fdrandom.range(-50,50)) } 
)

testarlen=1000
a1000r100g = Fdrandom.bulk( 
  testarlen 
 ,function(){ return Math.floor(Fdrandom.gnorm(-50,50)) } 
)

a1000r20g = Fdrandom.bulk( 
  testarlen 
 ,function(){ return Math.floor(Fdrandom.gnorm(-10,10)) } 
)

a1000r8g = Fdrandom.bulk( 
  testarlen 
 ,function(){ return Math.floor(Fdrandom.gnorm(-4,4)) } 
)

testarlen=1000
a1000r1e = Fdrandom.bulk( 
  testarlen 
 ,function(){ return 1.5 } 
)

testarlen=1000
a1000rxx = Fdrandom.bulk( 
  testarlen 
 ,Fdrandom.next 
)

testarlen=30000
var a30kr2kg = Fdrandom.bulk( 
  testarlen 
 ,function(){ return Math.floor(Fdrandom.gteat(-1000,1000)) } 
)

testarlen=200
var as200x = Fdrandom.bulk( 
  testarlen 
 ,function(){ return Fdrandom.mixof("shqwdheodcof  3084 {;@@/  ",Fdrandom.irange(1,300)) } 
)

testarlen=200
var as1kx = Fdrandom.bulk( 
  testarlen 
 ,function(){ return Fdrandom.mixof("shqwdheodcof  3084 {;@@/  ",Fdrandom.irange(1,300))}
)

var as1k2de=as1kx.concat(as200x).concat(as200x).concat(as200x).concat(as200x)

testarlen=2000
as1k2de = Fdrandom.mixof(as1k2de,testarlen)

var boop =4
function addit(c){
  return c+boop	
}

//~ enboop=fencache(c=>(c+=0,c+boop))
//~ boop=1
//~ console.log(enboop(2))
//~ return
//~ console.log(as1k2de[0],as1k2de[1])
//~ return

var strfast=function(c){ return c.length }
var strslow=function(c){ 
  var a=c.split("")
  c=JSON.stringify(a);
  c=JSON.stringify(c); 
  c=JSON.stringify(c); 
  c=JSON.stringify(c); 
  return c.split("").length 
}

strfast=strslow

var maveric=1
var mulsin=function(c){ 
  return Math.sin(c)+Math.sin(c*c)+Math.cos(c+0.5)+Math.cos(c*c+0.5)+
    maveric+ Math.sin(c+=0.25)+Math.sin(c*c)+Math.cos(c+0.5)+Math.cos(c*c+0.5)
}

var strfam0 = fencache(strfast,0)
var strfam1 = fencache(strfast,-1)
var strfam2 = fencache(strfast,-2)
var strfam100 = fencache(strfast,-100)
var strfa1 = fencache(strfast,-1)
var strfa3 = fencache(strfast,-3)
var strfa10 = fencache(strfast,-10)
var strfa100 = fencache(strfast,-100)
var strfa200 = fencache(strfast,350)
var strfa400 = fencache(strfast,0)

//~ strfa3("1dhue")
//~ strfa3("2dhue")
//~ strfa3("3dhue")
//~ strfa3("4dhue")
//~ strfa3("5dhue")
//~ strfa3("6dhue")
//~ strfa3("7dhue")
//~ console.log(strfa3.state())
//~ return

var fentest1 =[

  (function(){ 
  var arn="as1k2de" ,fnn="strfast"
  var arr= as1k2de  ,fun=strfast
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="as1k2de" ,fnn="strfam0"
  var arr= as1k2de  ,fun=strfam0
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="as1k2de" ,fnn="strfam1"
  var arr= as1k2de  ,fun=strfam1
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,
  (function(){ 
  var arn="as1k2de" ,fnn="strfam2"
  var arr= as1k2de  ,fun=strfam2
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,
  (function(){ 
  var arn="as1k2de" ,fnn="strfam100"
  var arr= as1k2de  ,fun=strfam100
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
  
]


var fentest2 =[

  (function(){ 
  var arn="as1k2de" ,fnn="strfast"
  var arr= as1k2de  ,fun=strfast
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,
  (function(){ 
  var arn="as1k2de" ,fnn="strfa1"
  var arr= as1k2de  ,fun=strfa1
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="as1k2de" ,fnn="strfa3"
  var arr= as1k2de  ,fun=strfa3
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="as1k2de" ,fnn="strfa10"
  var arr= as1k2de  ,fun=strfa10
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,
  (function(){ 
  var arn="as1k2de" ,fnn="strfa100"
  var arr= as1k2de  ,fun=strfa100
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }()),
  (function(){ 
  var arn="as1k2de" ,fnn="strfa200"
  var arr= as1k2de  ,fun=strfa200
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }()),
  (function(){ 
  var arn="as1k2de" ,fnn="strfa400"
  var arr= as1k2de  ,fun=strfa400
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
  
]


var ysinm100 = fencache( mulsin  ,-200 )
var ysinm2   = fencache( mulsin  ,-2 )
var ysinm1   = fencache( mulsin  ,-1 )
var ysinm0   = fencache( mulsin  ,0 )
var _ysin    = _.memoize( mulsin )
var zysin    =   memoiz( mulsin  ,0 )


var fentest3 =[

  (function(){ 
  var arn="a1000r100g" ,fnn="mulsin"
  var arr= a1000r100g  ,fun=mulsin
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r100g" ,fnn="ysinm1"
  var arr= a1000r100g  ,fun=ysinm1
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,
  (function(){ 
  var arn="a1000r100g" ,fnn="ysinm0 (store all)"
  var arr= a1000r100g  ,fun=ysinm0
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r100g" ,fnn="ysinm100"
  var arr= a1000r100g  ,fun=ysinm100
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
  
]



var msinm0    = fencache( Math.sin,0 )
var zmsin     = memoiz( Math.sin )

var msin1    = fencache( Math.sin,1 )
var ysin1    = fencache( mulsin  ,1 )
var ytsin1    = fencache( mulsin.bind(this)  ,1 )
var ysin2    = fencache( mulsin  ,2 )
var ysin3    = fencache( mulsin  ,3 )
var ysin12   = fencache( mulsin  ,12 )
var ysin60   = fencache( mulsin  ,60 )
var ysin100  = fencache( mulsin  ,100 )
var ysin300  = fencache( mulsin  ,300 )
var ysinm0  =  fencache( mulsin  ,0 )

var fentest4 =[

  (function(){ 
  var arn="a1000r100g" ,fnn="mulsin"
  var arr= a1000r100g  ,fun=mulsin
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r100g" ,fnn="ysin1"
  var arr= a1000r100g  ,fun=ysin1
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r100g" ,fnn="ysin2"
  var arr= a1000r100g  ,fun=ysin2
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r100g" ,fnn="ysin12"
  var arr= a1000r100g  ,fun=ysin12
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }()),

  (function(){ 
  var arn="a1000r100g" ,fnn="ysin60"
  var arr= a1000r100g  ,fun=ysin60
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r100g" ,fnn="ysin100"
  var arr= a1000r100g  ,fun=ysin100
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r100g" ,fnn="ysinm0"
  var arr= a1000r100g  ,fun=ysinm0
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r100g" ,fnn="_ysin"
  var arr= a1000r100g  ,fun=_ysin
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r100g" ,fnn="zysin"
  var arr= a1000r100g  ,fun=zysin
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
             
]

var fentest5 =[

  (function(){ 
  var arn="a1000r20g" ,fnn="mulsin"
  var arr= a1000r20g  ,fun=mulsin
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r20g" ,fnn="ysin1"
  var arr= a1000r20g  ,fun=ysin1
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r20g" ,fnn="ysin2"
  var arr= a1000r20g  ,fun=ysin2
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r20g" ,fnn="ysin12"
  var arr= a1000r20g  ,fun=ysin12
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }()),

  (function(){ 
  var arn="a1000r20g" ,fnn="ysin60"
  var arr= a1000r20g  ,fun=ysin60
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r20g" ,fnn="ysin100"
  var arr= a1000r20g  ,fun=ysin100
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r20g" ,fnn="ysinm0"
  var arr= a1000r20g  ,fun=ysinm0
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r20g" ,fnn="_ysin"
  var arr= a1000r20g  ,fun=_ysin
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r20g" ,fnn="zysin"
  var arr= a1000r20g  ,fun=zysin
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
                
]

var fentest6 =[
  
 //~ (function(){ 
    //~ var arn="a1000r1e" ,fnn="ysin1"
    //~ var arr= a1000r1e  ,fun=ysin1
   
    //~ return{
      //~ desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
     //~ ,func:function (){
        //~ var r=0, a=arr
        //~ for(var i=0,e=a.length;i<e;i++){
          //~ r+=fun(a[i])
        //~ } 
        //~ return r
      //~ }
  //~ } }())
//~ , 
  (function(){ 
  var arn="a1000r8g" ,fnn="mulsin"
  var arr= a1000r8g  ,fun=mulsin
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r8g" ,fnn="ysin1"
  var arr= a1000r8g  ,fun=ysin1
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r8g" ,fnn="ysin2"
  var arr= a1000r8g  ,fun=ysin2
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r8g" ,fnn="ysin12"
  var arr= a1000r8g  ,fun=ysin12
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }()),

  (function(){ 
  var arn="a1000r8g" ,fnn="ysin60"
  var arr= a1000r8g  ,fun=ysin60
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r8g" ,fnn="ysin100"
  var arr= a1000r8g  ,fun=ysin100
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r8g" ,fnn="ysinm0"
  var arr= a1000r8g  ,fun=ysinm0
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
,

  (function(){ 
  var arn="a1000r8g" ,fnn="_ysin"
  var arr= a1000r8g  ,fun=_ysin
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
             ,

  (function(){ 
  var arn="a1000r8g" ,fnn="zysin"
  var arr= a1000r8g  ,fun=zysin
 
  return{
    desc:fnn ,code:"r+="+fnn+"("+arn+"[i])"
   ,func:function (){
      var r=0, a=arr
      for(var i=0,e=a.length;i<e;i++){
        r+=fun(a[i])
      } 
      return r
    }
} }())
                
]

var msin200 = fencache( Math.sin,200 )
var msin50   = fencache( Math.sin,50 )
var msin4   = fencache( Math.sin,4 )
var msin3   = fencache( Math.sin,3 )
var msin2   = fencache( Math.sin,2 )
var msin1   = fencache( Math.sin,1 )


var testlist=[
 {rc:warmupset     ,ds:"warmup benchmarks"}
//~ ,{rc:fentest1      ,ds:"fencache"} 
//~ ,{rc:fentest2      ,ds:"fencacheb"}
,{rc:fentest3      ,ds:"stored, multi_trig, 100norm"}
,{rc:fentest4      ,ds:"ringed, multi_trig, 100norm"}
,{rc:fentest5      ,ds:"ringed, multi_trig, 20norm"}
,{rc:fentest6      ,ds:"ringed, multi_trig, 8norm"}
]

var testlenseconds=1.2, reps=2
dotests(testlist, testlenseconds, reps )

//~ console.log("\n",a1000r100g[0],a1000r100g[1],a1000r100g[2])

//fentest1
//shows stringifying keys is 100 times slower than having string keys
//shows best case lookups in native mode are 1/10th speed
//of simple calc like str => str.length
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

testarlen=100
var as100x = Fdrandom.bulk( 
  testarlen 
 ,function(){ return Fdrandom.mixof("shqwdheodcof  3084 {;@@/  ",Fdrandom.irange(1,300)) } 
)

testarlen=200
var as1kx = Fdrandom.bulk( 
  testarlen 
 ,function(){ return Fdrandom.mixof("shqwdheodcof  3084 {;@@/  ",Fdrandom.irange(1,300))}
)

var str1k4x200=as1kx.concat(as200x).concat(as200x).concat(as200x).concat(as200x)
var str1k8x100=as1kx.concat(as100x).concat(as100x).concat(as100x).concat(as100x).concat(as100x).concat(as100x).concat(as100x).concat(as100x)

testarlen=1000
str1k4x200 = Fdrandom.mixof(str1k4x200,testarlen)
str1k8x100 = Fdrandom.mixof(str1k8x100,testarlen)

var boop =4
function addit(c){
  return c+boop	
}

//~ enboop=fencache(c=>(c+=0,c+boop))
//~ boop=1
//~ console.log(enboop(2))
//~ return
//~ console.log(str1k4x200[0],str1k4x200[1])
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


var maveric=1
var mulsin=function(c){ 
  return Math.sin(c)+Math.sin(c*c)+Math.cos(c+0.5)+Math.cos(c*c+0.5)+
    maveric+ Math.sin(c+=0.25)+Math.sin(c*c)+Math.cos(c+0.5)+Math.cos(c*c+0.5)
}

var strfa200 = fencache(strfast,20)
var strfa400 = fencache(strfast,40)
var strfa_0 = fencache(strfast,0)
var strfa_3 = fencache(strfast,-3)
var strfa_200 = fencache(strfast,200)
var strfa_1000 = fencache(strfast,1000)
var strfa_2000 = fencache(strfast,2000)
var strfz = memoiz(strfast)
var strf_ = _.memoize(strfast)

var strsl200 = fencache(strslow,200)
var strsl400 = fencache(strslow,400)
var strsl_0 = fencache(strslow,-1)
var strsl_3 = fencache(strslow,-3)
var strsl_200 = fencache(strslow,200)
var strsl_1000 = fencache(strslow,1000)
var strsl_2000 = fencache(strslow,2000)
var strsz = memoiz(strslow)
var strs_ = _.memoize(strslow)

var fentest1 =[

  (function(){ 
  var arn="str1k4x200" ,fnn="strfast"
  var arr= str1k4x200  ,fun=strfast
 
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
  var arn="str1k4x200" ,fnn="strfa_0"
  var arr= str1k4x200  ,fun=strfa_0
 
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
  var arn="str1k4x200" ,fnn="strfa_3"
  var arr= str1k4x200  ,fun=strfa_3
 
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
  var arn="str1k4x200" ,fnn="strfa_200"
  var arr= str1k4x200  ,fun=strfa_200
 
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
  var arn="str1k4x200" ,fnn="strfa_1000"
  var arr= str1k4x200  ,fun=strfa_1000
 
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
  var arn="str1k4x200" ,fnn="strfa_2000"
  var arr= str1k4x200  ,fun=strfa_2000
 
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
  var arn="str1k4x200" ,fnn="strfa200"
  var arr= str1k4x200  ,fun=strfa200
 
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
  var arn="str1k4x200" ,fnn="strfz"
  var arr= str1k4x200  ,fun=strfz
 
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
  var arn="str1k4x200" ,fnn="strf_"
  var arr= str1k4x200  ,fun=strf_
 
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
  var arn="str1k4x200" ,fnn="strslow"
  var arr= str1k4x200  ,fun=strslow
 
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
  var arn="str1k4x200" ,fnn="strsl_0"
  var arr= str1k4x200  ,fun=strsl_0
 
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
  var arn="str1k4x200" ,fnn="strsl_3"
  var arr= str1k4x200  ,fun=strsl_3
 
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
  var arn="str1k4x200" ,fnn="strsl_200"
  var arr= str1k4x200  ,fun=strsl_200
 
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
  var arn="str1k4x200" ,fnn="strsl_1000"
  var arr= str1k4x200  ,fun=strsl_1000
 
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
  var arn="str1k4x200" ,fnn="strsl_2000"
  var arr= str1k4x200  ,fun=strsl_2000
 
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
  var arn="str1k4x200" ,fnn="strsl200"
  var arr= str1k4x200  ,fun=strsl200
 
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
  var arn="str1k4x200" ,fnn="strsz"
  var arr= str1k4x200  ,fun=strsz
 
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
  var arn="str1k4x200" ,fnn="strs_"
  var arr= str1k4x200  ,fun=strs_
 
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






var fentest1 =[

  (function(){ 
  var arn="str1k4x200" ,fnn="strfast"
  var arr= str1k4x200  ,fun=strfast
 
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
  var arn="str1k4x200" ,fnn="strfa_0"
  var arr= str1k4x200  ,fun=strfa_0
 
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
  var arn="str1k4x200" ,fnn="strfa200"
  var arr= str1k4x200  ,fun=strfa200
 
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
  var arn="str1k4x200" ,fnn="strfa400"
  var arr= str1k4x200  ,fun=strfa400
 
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
  var arn="str1k4x200" ,fnn="strf_"
  var arr= str1k4x200  ,fun=strf_
 
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
  var arn="str1k4x200" ,fnn="strslow"
  var arr= str1k4x200  ,fun=strslow
 
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
  var arn="str1k4x200" ,fnn="strsl_0"
  var arr= str1k4x200  ,fun=strsl_0
 
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
  var arn="str1k4x200" ,fnn="strsl200"
  var arr= str1k4x200  ,fun=strsl200
 
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
  var arn="str1k4x200" ,fnn="strsl400"
  var arr= str1k4x200  ,fun=strsl400
 
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
  var arn="str1k4x200" ,fnn="strs_"
  var arr= str1k4x200  ,fun=strs_
 
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
  var arn="str1k8x100" ,fnn="strfast"
  var arr= str1k8x100  ,fun=strfast
 
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
  var arn="str1k8x100" ,fnn="strfa_0"
  var arr= str1k8x100  ,fun=strfa_0
 
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
  var arn="str1k8x100" ,fnn="strfa_3"
  var arr= str1k8x100  ,fun=strfa_3
 
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
  var arn="str1k8x100" ,fnn="strfa_200"
  var arr= str1k8x100  ,fun=strfa_200
 
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
  var arn="str1k8x100" ,fnn="strfa_1000"
  var arr= str1k8x100  ,fun=strfa_1000
 
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
  var arn="str1k8x100" ,fnn="strfa_2000"
  var arr= str1k8x100  ,fun=strfa_2000
 
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
  var arn="str1k8x100" ,fnn="strfa200"
  var arr= str1k8x100  ,fun=strfa200
 
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
  var arn="str1k8x100" ,fnn="strfz"
  var arr= str1k8x100  ,fun=strfz
 
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
  var arn="str1k8x100" ,fnn="strf_"
  var arr= str1k8x100  ,fun=strf_
 
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
  var arn="str1k8x100" ,fnn="strslow"
  var arr= str1k8x100  ,fun=strslow
 
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
  var arn="str1k8x100" ,fnn="strsl_0"
  var arr= str1k8x100  ,fun=strsl_0
 
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
  var arn="str1k8x100" ,fnn="strsl_3"
  var arr= str1k8x100  ,fun=strsl_3
 
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
  var arn="str1k8x100" ,fnn="strsl_200"
  var arr= str1k8x100  ,fun=strsl_200
 
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
  var arn="str1k8x100" ,fnn="strsl_1000"
  var arr= str1k8x100  ,fun=strsl_1000
 
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
  var arn="str1k8x100" ,fnn="strsl_2000"
  var arr= str1k8x100  ,fun=strsl_2000
 
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
  var arn="str1k8x100" ,fnn="strsz"
  var arr= str1k8x100  ,fun=strsz
 
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
  var arn="str1k8x100" ,fnn="strs_"
  var arr= str1k8x100  ,fun=strs_
 
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
  var arn="str1k8x100" ,fnn="strsl200"
  var arr= str1k8x100  ,fun=strsl200
 
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
,{rc:fentest1      ,ds:"fencache"} 
//~ ,{rc:fentest2      ,ds:"fencacheb"}
//~ ,{rc:fentest3      ,ds:"stored, multi_trig, 100norm"}
//~ ,{rc:fentest4      ,ds:"ringed, multi_trig, 100norm"}

//~ ,{rc:fentest5      ,ds:"ringed, multi_trig, 20norm"}
//~ ,{rc:fentest6      ,ds:"ringed, multi_trig, 8norm"}
]

var testlenseconds=1.2, reps=2
dotests(testlist, testlenseconds, reps )

//~ console.log("\n",a1000r100g[0],a1000r100g[1],a1000r100g[2])

//fentest1
//shows stringifying keys is 100 times slower than having string keys
//shows best case lookups in native mode are 1/10th speed
//of simple calc like str => str.length
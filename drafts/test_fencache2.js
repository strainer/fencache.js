/// tyranical test script

if(typeof window ==='undefined'){
  require ('./xlib/mutil.js')
  fencache=require ('../fencache.min.js')
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

var pu=500

testarlen=1000
number = Fdrandom.bulk( 
  testarlen 
 ,function(){ return Math.floor(Fdrandom.irange(1,pu))*Math.PI } 
 //~ ,function(){ return (Fdrandom.gnorm(1,16))//*Math.PI }
 //~ ,function(){ return (Fdrandom.gnorm(1,1))//*Math.PI }
)

testarlen=1000
shortstr = Fdrandom.bulk( 
  testarlen 
 //~ ,function(){ return Math.floor(Fdrandom.gnorm(-10,10)) } 
 //~ ,function(){ return Math.floor(Fdrandom.gnorm(-100,100)) } 
 ,function(){ return ""+Math.floor(Fdrandom.irange(0,pu)) } 
)

testarlen=pu
longstr = Fdrandom.bulk( 
  testarlen 
 ,function(){ return Fdrandom.mixof("shqwdheodcof  3084 {;@@/  ",200) } 
)

testarlen=1000
longstr = Fdrandom.mixof(longstr,testarlen)


var strfast=function(c){ return c.length }
var strslow=function(c){ 
  var a=c.split("")
  c=JSON.stringify(a);
  c=JSON.stringify(c); 
  c=JSON.stringify(c); 
  c=JSON.stringify(c); 
  return c.split("").length 
}

var mathsin =function(c){return Math.sin(c)}

var ensin_0 = fencache(mathsin,0)
var ensin__ = _.memoize(mathsin,0)
var ensin = fencache(mathsin,pu)


var multisin =function(c){ 
  return Math.sin(c)*Math.sin(c/2)+Math.cos(c)+
  Math.cos(c/3)/c%3.33-Math.pow(0.32314,c) 
}

var enmulti_0 = fencache(multisin,0)
var enmulti__ = _.memoize(multisin,0)
var enmulti = fencache(multisin,pu)


var strfa_0 = fencache(strfast,0)
var strfa_z = memoiz(strfast)
var strfa__ = _.memoize(strfast)
var strfa = fencache(strfast,pu)

var strso_0 = fencache(strslow,0)
var strso_z = memoiz(strslow)
var strso__ = _.memoize(strslow)
var strso = fencache(strslow,pu)


var fentest1a =[

  (function(){ 
  var arn="number" ,fnn="Math.sin"
  var arr= number  ,fun=mathsin
 
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
  var arn="number" ,fnn="ensin_0"
  var arr= number  ,fun=ensin_0
 
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
  var arn="number" ,fnn="ensin__"
  var arr= number  ,fun=ensin__
 
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
  var arn="number" ,fnn="ensin:"+pu
  var arr= number  ,fun=ensin
 
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


var fentest1b =[

  (function(){ 
  var arn="number" ,fnn="Multi.sin"
  var arr= number  ,fun=multisin
 
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
  var arn="number" ,fnn="enmulti_0"
  var arr= number  ,fun=enmulti_0
 
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
  var arn="number" ,fnn="enmulti__"
  var arr= number  ,fun=enmulti__
 
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
  var arn="number" ,fnn="enmulti:"+pu
  var arr= number  ,fun=enmulti
 
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
  var arn="shortstr" ,fnn="strfast"
  var arr= shortstr  ,fun=strfast
 
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
  var arn="shortstr" ,fnn="strfa_0"
  var arr= shortstr  ,fun=strfa_0
 
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
//~ ,
  //~ (function(){ 
  //~ var arn="shortstr" ,fnn="strfa_z"
  //~ var arr= shortstr  ,fun=strfa_z
 
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
,
  (function(){ 
  var arn="shortstr" ,fnn="strfa__"
  var arr= shortstr  ,fun=strfa__
 
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
  var arn="shortstr" ,fnn="strfa:"+pu
  var arr= shortstr  ,fun=strfa
 
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
  
  
var fentest3 =[
  (function(){ 
  var arn="longstr" ,fnn="strfast"
  var arr= longstr  ,fun=strfast
 
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
  var arn="longstr" ,fnn="strfa_0"
  var arr= longstr  ,fun=strfa_0
 
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
//~ ,
  //~ (function(){ 
  //~ var arn="longstr" ,fnn="strfa_z"
  //~ var arr= longstr  ,fun=strfa_z
 
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
,
  (function(){ 
  var arn="longstr" ,fnn="strfa__"
  var arr= longstr  ,fun=strfa__
 
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
  var arn="longstr" ,fnn="strfa:"+pu
  var arr= longstr  ,fun=strfa
 
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
  
var fentest4 =[

  (function(){ 
  var arn="shortstr" ,fnn="strslow"
  var arr= shortstr  ,fun=strslow
 
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
  var arn="shortstr" ,fnn="strso_0"
  var arr= shortstr  ,fun=strso_0
 
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
//~ ,
  //~ (function(){ 
  //~ var arn="shortstr" ,fnn="strso_z"
  //~ var arr= shortstr  ,fun=strso_z
 
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
,
  (function(){ 
  var arn="shortstr" ,fnn="strso__"
  var arr= shortstr  ,fun=strso__
 
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
  var arn="shortstr" ,fnn="strso:"+pu
  var arr= shortstr  ,fun=strso
 
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
  var arn="longstr" ,fnn="strslow"
  var arr= longstr  ,fun=strslow
 
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
  var arn="longstr" ,fnn="strso_0"
  var arr= longstr  ,fun=strso_0
 
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
//~ ,
  //~ (function(){ 
  //~ var arn="longstr" ,fnn="strso_z"
  //~ var arr= longstr  ,fun=strso_z
 
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
,
  (function(){ 
  var arn="longstr" ,fnn="strso__"
  var arr= longstr  ,fun=strso__
 
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
  var arn="longstr" ,fnn="strso:"+pu
  var arr= longstr  ,fun=strso
 
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


var testlist=[
 {rc:warmupset      ,ds:"warmup benchmarks"}
,{rc:fentest1a      ,ds:"number, sin, mixed hit:"+pu} 
,{rc:fentest1b      ,ds:"number, multisin, mixed hit:"+pu} 
//~ ,{rc:fentest2      ,ds:"short str fast, mixed hit:"+pu} 
//~ ,{rc:fentest3      ,ds:"long str fast, mixed hit:"+pu} 
//~ ,{rc:fentest4      ,ds:"short str slow, mixed hit:"+pu} 
//~ ,{rc:fentest5      ,ds:"long str slow, mixed hit:"+pu} 
]

var testlenseconds=1.2, reps=2
dotests(testlist, testlenseconds, reps )

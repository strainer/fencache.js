/// tyranical test script

if(typeof window ==='undefined'){
  require ('./xlib/mutil.js')
  fencache=require ('../fencache.js')
  _=require ('./xlib/underscore.js')
  memoiz=require ('./xlib/fastmemo.js')
  Fdrandom=require ('./xlib/Fdrandom.js')
  window=global
}

enf = fencache(Math.sin)
console.log(enf.bypass(9)) enf.raw
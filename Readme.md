Fencache.js
===========
(Function encache)

This is a special memoizer which remembers the most repeated calculations and forgets the infrequent ones, so it avoids the possibility of excessive memory usage and recalls the most frequent calculations most speedily. It is designed for memoizing functions which operate on a mix of unique and recurring inputs.

The usual kind of Javascript memoizer stores pairs of argument:result's in Javascripts native object. Fencache also includes this object based storage mode with an option to purge the store if it gets too large. However the special cache storage mode (default) can perform much better.

### Basic Usage

It takes a function and returns a cached version of it:
```
  fencache = require("fencache.js") 

  enMathsin = fencache( Math.sin )

  enMathsin(x) === Math.sin(x) // always true 
```

Default cache size is 20, any size can be set:
```
  enMathsin = fencache( Math.sin ,1 ) 
```
Cache size of 1 is streamlined with no cache management which is ideal when the calculation rarely changes, like:
```
  for( a=0; a<1000; a++ )
    for( b=0; b<1000; b++ )
      somesum += enMathsin(a) + Math.sin(b)
```

The choice of best cache size depends on the fleetness of the cached function and on the degree of repetition of processed values - if the process values have little repetition there is no benefit memoizing them. Fencache stores previous calculations in a "tweaked ring buffer" which is slightly sorted on every hit so it can bubble up the most repeated values. A later section has more info on this. 

### Native store mode

Set size to 0 for native storage mode like other memoizers, or negative. 
```
  enReply = fencachex(reply, 0)     //use the native object as cache
  enReply = fencachex(reply, -1000) //flush half the cache after 1000 entries
```

This mode may perform better for keeping thousands of equally distributed calculation results, and not requiring old results to be flushed. (Result flushing is relatively cumbersome)

### Optional parameter for keying Objects and multiple arguments.

```
  enCalcObj = fencache(CalcOnObj, 1000, ob=>ob.idstring )
```
In this case where CalcOnObj takes objects and processes data within them,
a fat arrow or other function in the third parameter, can return a value
to use as the storage key to identify the objects efficiently and by their content.
Without this function, in cache mode input objects will be identified by their native reference, in native object mode they are automatically stringified (slow).

When cache size is set to 1, this parameter is ignored as size 1 is streamlined (use size 2 if needed). 

### Other Methods

```  
  result = enMathsin.bypass(k) // returns calculation without caching it
  cchval = enMathsin.val(k)    // returns cached val without calculating 
  oldval = enMathsin.put(val,key)   // sets val to key, returns old val 
  sttobj = enMathsin.state()        // returns the whole state
  enMathsin.reset(/**sttobj**/)     // clears or replaces state (memory)
  
  //memoized functions can take up to 5 arguments
  //but a keying function is then needed to id results to
  //the multiple input arguments, eg:
  enpow = fencache(Math.pow,30, (a,b)=>""+a+","+b )
  cando = enpow(2,8) //(result is keyed to "2,8")
  //heres a fast insecure way to key two numeric params:
  enpow = fencache(Math.pow,30, (a,b)=> a + b*888888887 )
```

### Cache Size Performance
 
Where 'mixed hit' means average time to randomly access and return 
results from a full cache:

* Cache size 1 returns a previous hit about 3 times as fast as Math.sin
* Cache size 4 returns mixed hits about 2 times as fast as Math.sin
* Cache size 20 returns mixed hits about 1 times as fast as Math.sin
* Cache size 50 returns mixed hits about 75% as fast as Math.sin
* Cache size 500 returns mixed hits about 10% as fast as Math.sin

With 'Slowest hit' meaning time to return the lowest ranked result in
the cache: 
* Slowest hit on size 15 is about 1 times as fast as Math.sin
* Slowest hit on size 500 is about 5% as fast as Math.sin

'Hit return speed' is not affected by the speed of the 'carried' function as the carried function only runs on a cache miss. Cache misses take no longer than slow hits - minus the time which the cached function requires. 

Basically, try values between 1 and a few hundred depending on the weight of the cached function and on the distribution of repetitive inputs. 

Performance of memoizers which use javascripts native object to store is very different, numeric arguments need stringified and also internally hashed, so the stores best return time of floating point keyed data (required for math functions) is about 8 times slower than Math.sin (25 times slower that fencaches best). The native objects performance scales better with n items stored, but still can take until about n=400 to catch up with fencaches sorted list mode - when accessed uniformly. When some processed values recur more often than others, the sorted list mode can work much faster as more of the hits are found early in its list.

### Performance Micro-Optimizations

On the first call, fencache fills its two storage arrays with the first argument:result pair it sees, or values passed by method `init`. This allows JS engines to make the arrays contigious and fit the right types and can improve the subsequent performance of the arrays. If the types are to be real numbers, make sure the first calculation is not by chance an integer, as this can mix types in the array which can slow it a bit. An 'init' method is also included to set the arrays up eg. ensine.init(-0,-0) will set the cache to non-integer number type.

Fencache contains other obscure micro optimizations tested for several versions of V8 and Spidermonkey, which seem appropriate for a small performance orientated tool. 

### Version History
* 1.2.0 - Oct18 : Reduced optional parameters to 5 
* 1.1.0 - Oct18 : A little fix to 'put' method 
* 0.9.0 - Aug18 : Quite tested and polished 

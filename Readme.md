Fencache.js
===========

This javascript function memoizer uses an array based structure for storage which gives it different performance characteristics to most javascript memoizers which use the native object type for storage.

#### Performance Differences

Fencache can memoize math functions in practice much faster than other popular memoizers, as it does not use native objects for storage. Native objects cast numeric keys to strings which is a big performance hit working with floating point values.

Fencache also does a sort step in its array based cache on every hit so the most frequently seen values are returned most quickly. It also sets a limit to the number of cached input/output pairs and it overwrites the most unused values instead of growing an excessive memory demand, which is a vulnerability that most object store based memoizers have.

#### Storage structure

Two arrays in parallel store the memoized functions input and output values. The arrays have a head section where entries are incrementally bubble sorted on every hit, and in the remaining space a ring buffer receives any missed calculations and swaps any hits into the last position of the sorting section. If this structure needed a name it could be called a "nose-ring cache". It is two different abstract data types combined for efficiency, done mostly in this private [function `nsrng`](https://github.com/strainer/fencache.js/blob/master/fencache.js#L118). 

The best size for the cache depends on the speed of the function to memoize and on the degree of repetition of calculations which will run. A size of around 20 can often work well enough assuming there is a useful amount of repetition. 

For testing and other occasions fencache.js also implements an object store option, but a Map() store option seems redundant here.

### Basic Usage

```
  fencache = require("fencache.js") 

  enMathsin = fencache( Math.sin )

  enMathsin(x) === Math.sin(x) // always true 
```

Default cache size is 20, any size can be set:
```
  enMathsin = fencache( Math.sin ,1 ) 
```
Cache size of 1 is streamlined with no cache management; ideal for when the calculation rarely changes, like:
```
  for( a=0; a<1000; a++ )
    for( b=0; b<1000; b++ )
      somesum += enMathsin(a) + Math.sin(b)
```

### Native store mode

Size 0 sets native storage mode, a negative value limits the native store size. 
```
  enReply = fencache(reply, 0)     //use the native object as cache
  enReply = fencache(reply, -1000) //flushes half the cache after 1000 different entries
```

This mode may perform better for keeping thousands of equally distributed calculation results, and not requiring old results to be flushed. (Result flushing is relatively slow)

### Optional parameter for keying Objects and multiple arguments.

```
  enCalcObj = fencache(calcOnObj, 1000, ob=>ob.idstring )
```
In this case where calcOnObj takes objects and processes data within them,
a function in the third parameter can return a value to use as the storage key.
Without this function, in fencaches default mode objects are identified by their native reference (not contents), in the native object mode they are automatically stringified. Memoized functions can take up to 5 arguments but a keying function is then needed to id results to the multiple input arguments:

```
  enpow = fencache(Math.pow,30, (a,b)=>""+a+","+b )
  cando = enpow(2,8) //(result is keyed to "2,8")
  // here is a fast insecure way to key two numeric params:
  enpow = fencache(Math.pow,30, (a,b)=> a + b*888888887 )
```
When cache size is set to 1, the third parameter is ignored.

### Other Methods

```  
  result = enMathsin.bypass(k) // returns calculation without caching it
  cchval = enMathsin.val(k)    // returns cached val without calculating 
  oldval = enMathsin.put(val,key)   // sets val to key, returns old val 
  sttobj = enMathsin.state()        // returns the whole state
  enMathsin.reset(/**sttobj**/)     // clears or replaces state (memory)  
```

### Performance and Cache Size
 
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

'Hit return speed' is not affected by the speed of the function to memoize as that function only runs on a cache miss. Cache misses take no longer than slow hits - plus the time which the function requires. 

Basically, try values between 1 and a few hundred depending on the weight of the cached function and on the distribution of repetitive inputs.

In contrast, an object store's best return time of floating point keyed data is about 8 times slower than Math.sin (25 times slower than fencaches best). The native objects performance scales better with n items stored, but still can take until about n=400 to catch up with fencaches sorted list mode - when accessed uniformly. When some inputs recur more often than others, the sorted list mode can work a great deal faster, as more of the hits are found early in its list.

### Performance Micro-Optimizations

On the first call, fencache fills its two storage arrays with the first argument:result pair it sees. This allows the JS engine to make the arrays contiguous and monomorphic improving the subsequent performance. An 'init' method is also included to set the arrays up eg: `ensine.init(-0,-0)` will set the cache to non-integer number type. The reason for this method is, if the types are to be real numbers the first calculation might by chance be an integer, which would mix types in the array.

Fencache contains other obscure micro optimizations tested on several versions of Node and Firefox, which seem appropriate for a small performance orientated tool. I know its weirdly formatted but sure its all the same once minimized anyway.

### Version History
* 1.4.0 - Jan19 : Correct put method
* 1.3.0 - Jan19 : Fix bug in reset method
* 1.2.0 - Oct18 : Reduced optional parameters to 5 
* 1.1.0 - Oct18 : A little fix to 'put' method 
* 0.9.0 - Aug18 : Quite tested 
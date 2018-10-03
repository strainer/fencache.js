Fencache.js
===========
(Function Encache)

This is a special memoizer designed for functions which see an unlimited variety of inputs but which have a set of commonly repeating inputs. It remembers the most repeated calculations and forgets the infrequent ones, avoiding the possibility of excessive memory usage. 

Fencache's performance characteristics are very different from the common kind of javascript memoizer which stores pairs of argument:result in a native hash table. It also implements the common hash table mode, with an option to purge the table if it gets too large.

### Basic Usage

Fencaches takes a function and returns a cached version of it:
```
  fencache = require("fencache.js") 

  enMathsin = fencache( Math.sin )

  enMathsin(x) === Math.sin(x) // it is always true 
```

Default cache size is 20, any size can be set:
```
  enMathsin = fencache( Math.sin ,1 ) 
```
Cache size of 1 is streamlined with no cache management and is ideal when the calculation 
rarely changes, like:
```
  for( a=0; a<1000; a++ )
	  for( b=0; b<1000; b++ )
		  somesum += enMathsin(a) + Math.sin(b)
```

The choice of cache size depends on how heavy the cached function is and on the degree of repetition of input values (if the input values have little repetition there is no point memoizing them.)
Fencache stores throughput in a tweaked ring buffer which is slightly sorted on every hit so it can bubble up the most repeated values. 

More benchmarking and performance in later discussion.

### Native store mode

Set size to 0 or negative for native storage mode, like other memoizers. 
```
  enReply = fencachex(reply, 0)     //use the native object as cache
  enReply = fencachex(reply, -1000) //dump half the cache after 1000 entries
```

This mode may perform better for keeping hundreds or more equally distributed calculation results, and not requiring old results to be flushed. 


### Optional parameter for keying Objects and multiple arguments.

```
  enCalcObj = fencache(CalcOnObj, 1000, ob=>ob.idstring )
```
In this case where CalcOnObj takes objects and processes data within them,
a fat arrow or other function in the third parameter, can return a value
to use as the storage key to identify the objects efficiently and by their content.
Without this function, in cache mode input objects will be identified by their native reference, in native object mode they are automatically stringified.

When cache size is set to 1, this parameter is ignored as the cost of any keying function would make the benefit of size 1's streamlining very marginal. 

### Other Methods

```  
  result = enMathsin.bypass(k) // returns calculation without caching it
  cchval = enMathsin.val(k)    // returns cached val without calculating 
  oldval = enMathsin.put(val,key)   // sets val to key, returns old val 
  sttobj = enMathsin.state()        // returns the whole state
  enMathsin.reset(/*replacement*/)  // clears or replaces state (memory)
  
  //memoized functions can take up to 8 arguments
  //but a keying function is then needed to id results to
  //the multiple input arguments, eg:
  enpow = fencache(Math.pow,30, (a,b)=>""+a+","+b )
  cando = enpow(2,8) //(result is keyed to "2,8")
```

### Cache size
 
The following explainations may be unclear. Basically, try values between 1 and a few hundred depending on the weight of the 'carried' function and on the distribution of repetitive inputs. 

Where 'mixed hit' means average time to randomly access and return 
results from a full cache:

* Cache size 1 returns a previous hit about 3 times as fast as Math.sin
* Cache size 4 returns mixed hits about 2 times as fast as Math.sin
* Cache size 20 returns mixed hits about 1 times as fast as Math.sin

'Slowest hit' meaning time to return the lowest ranked result in
the cache: 
* Slowest hit on size 15 is about 1 times as fast as Math.sin

'Hit return speed' is not affected by the speed of the 'carried' function as the carried function only runs on a cache miss. Minus the time which the carried function requires, cache misses take no longer than slow hits. 

Performance of memoizers which use javascripts native store is very different, they must stringify numeric arguments and also hash them, so the stores best return time of floating point keyed data (required for math functions) is about 8 times slower than Math.sin (25 times slower that fencaches best). The native hash tables performance scales better with n items stored, but still it takes until about n=400 to catch up with fencaches sorted list mode - when accessed randomly. When the hits are accessed in a bell shaped distribution, the sorted list mode can work a great deal faster as most of the hits are found early in its list.

### Performance micro optimizations

On the first call, fencache fills its two storage arrays with the first argument:result pair it sees. This allows both V8 and spidermonkey to make the arrays contigious and fit the right types and much improves the subsequent performance of the arrays. If the types are to be real numbers, make sure the first calculation is not by chance an integer, as this can mix types in the array which slows it considerably.

Fencache contains obscure micro optimizations tested for several versions of V8 and Spidermonkey. These seem appropriate for a small performance orientated tool. Its coding style is also a kind of private shorthand (apology).


### Version History
* 0.9.0 - Aug18 : Quite tested and polished 

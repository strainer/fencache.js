Fencache.js
===========
Function Encache - a javascript memoizer optimised for fast cases.

Basic Usage
-----------

Fencache factory takes a function and returns a cached version:
```
  fencache = require("fencache.js")
  
  enMathsin = fencache( Math.sin )

  enMathsin(x) === Math.sin(x) // it is always true 
```

Default cache size is 32, any size can be set:
```
  enMathsin = fencache( Math.sin ,1 ) 
```
Cache size of 1 is streamlined with no cache managemnt and is ideal when the calculation 
rarely changes, like:
```
  for( a=0; a<1000; a++ )
	  for( b=0; b<1000; b++ )
		  somesum += enMathsin(a) + Math.sin(b)
```
Performance-wize, in the example above enMathsin can be about half
as time costly as Math.sin. Generally, fencache can only be advantageous
for calculations involving multiple weighty ops or loops, and which
have repetition and low diversity of inputs. 

The design is focused on best performance for medium complexety math
calculations with input diversity suitable for cache sizes up to 100
(while allowing for a proportion of misses).
However for calculations taking microseconds or longer, much larger cache sizes
are viable. 

(Benchmarking info in later section)

Optional function for keying Objects.
---------------------------------------
```
  enCalcObj = fencache(CalcOnObj, 1000, ob=>ob.idstring )
```
In this case where CalcOnObj takes objects and processes data within them,
a fat arrow or other function in the third parameter, can return a value
to use as a storage key to identify the objects efficiently and by their content.
Without this function, input objects will be identified by their native reference, 
which can be efficient but is unsuitable where the input object contents are updated or repeated.
When cache size is set to 1, this parameter is ignored as the cost of any keying function would make the benefit of size 1's streamlining very marginal. 

Other Methods
-------------
```  
  result = enMathsin.bypass(0) // returns calculation without caching it
  cchval = enMathsin.val(0)    // returns cached val without calculating 
  oldval = enMathsin.put(key,val) // sets val to key, returns old val 
  sttobj = enMathsin.state()        // returns the whole state
  enMathsin.reset(/*replacement*/)  // clears or replaces state (memory)
```

Notes
-----
Fencache is not equiped to memoize functions which take multiple parameters as accomodating that would seem likely to result in a performance overhead for the common single parameter case. Although, we might get around to adding a convient wrapping facility.

Version History
---------------
* 2.7.0 - added 'R' fill patterns of Martin Roberts. From 

Other Memoization Links
-----------------------
[Article](http://http://extremelearning.com.au/unreasonable-effectiveness-of-quasirandom-sequences/)


An extended file - fencachex.js
-------------------------------
fencachex is compatible with fencache, and includes an extra storage mode and a general object hashing function. Javascript's native object is used as the store in this mode which has theoretically useful O(1) lookup time, but may work out significantly slower in most cases than fencaches chosen mode, which uses a two array ring buffer to store parameters and results. Javascript objects are keyed only by strings and converting numbers or objects to strings is slow. 

fencacheX usage:
```
  enReply = fencachex(reply, 0)    //use native object as cache
  enReply = fencachex(reply, -100) //dump half the cache after 100 entries
  enCalcObj = fencachex(CalcOnObj, 0, {} ) //key args with internal function
  enCalcObj = fencachex(CalcOnObj, 0, customfn ) //key args with 'customfn''
```

The extra mode included in fencacheX may be performant for memoizing
slow functions that have hundreds or more recurring inputs, but as 
the modes potential seems to be mostly eclipsed by the ring buffer
system, standard fencache omits it. 


Performance notes and data
--------------------------

Example benchmark scores:

Test of worst case (all misses) with random unique inputs

fencached perfomance:
```
Math.sin src performance, 30 Million func/s

function  csize  speed % (of src) 
enSin      1      60.0   
enSin      2      50.0   
enSin      3      15.0   
enSin      4       6.0 
ensin      50      0.8 
ensin      200     0.2 
```

Test best case with 1 repeated input:
```
Math.sin,               30  Million func/s
A multi.trig function,  1.7 Million func/s

function  csize  speed % 
enSin      1      220   
enMTrig    1     3800 
```
 
Test on 90 normally distributed distinct values
```
Multi.trig function : 1.7 Mfunc/s

function  csize  speed %
enTrig      1      95
enTrig      2      95
enTrig      3      90
enTrig     12     110
enTrig     60     220
enTrig    100     310
enTrigx     0     840
```

Test a string processing functions on a selection of random length
strings of upto 300 chars each, 200 of them repeated 4 times mixed up
with 200 non repeated unique strings 
```
fast string process function : 130 Million func/s
slow string process function : 5.9 Thousand func/s

function  csize  speed %
faststr     1      25.0   
faststr     3       3.0    
faststr    10       1.5
faststr   100       0.3
faststr   200       0.13
faststr   400       0.2
faststrx    0       8
                
slowstr     1     100    
slowstr     3     100    
slowstr    10     105
slowstr   100     160
slowstr   200     400
slowstr   400    4600            
slowstrx    0  190000 (%!)  
```


Writing memory can often be a comparatively heavy nano operation, even when we are just duplicating references. Since memoizing necessitates extra memory writes as well as lookups, memoizing calculation results 


is only performant when there is
some degree of repetition of parameters because keeping a larger cache size
entails having more entries to check. Each cache search takes O(size) time
for every miss. Fencache optimises lightly by floating results toward the head
of the list each time they are recalled. This greatly suits unevenly distributed
parameter sets and only marginally slows worst case.





design notes
------------
* the key val storage option could perform better with equal buted inputs
but is genrly hindered because arg/keys have to be stringified to be stowed 
and checked.
a recent value buffering stage could improve the store

* the double ring buffer storage could turn itself off on long runs of misses
and resume after a resting count
or could reduce its search and not write...
basically a gism to giveup on repeat misses, and forget the tail or whole queue.
since excessive misses entail excessive time consumed.
little extra time may need added to the general case
in order to count and react to successive excessive misses.
eg to 20 misses of 20 entries.
but the optimisations could choke general performance on problem patterns
however they may greatly smooth reaction to the more common problem pattern
of frequent cache miss runs.

gism 1
after a number of long cache misses and writes,
when rx gets to middle, split the cache and fill again
as the low split of cache should be sorted infrequent anyway
little point in keeping checking it
gism 2
when miss rx!==split point, count it and write res
when miss rx==split point, and count high, and if count then refill again

problem cache strat is different for slow 

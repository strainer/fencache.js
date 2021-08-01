Nose Ring Buffer - for quick collection of most frequent values.

When there is a need to discover the most frequent values in a set, the instinct is to tally a frequency count for each value present and then sort the resulting set of value:tallie pairs - to get the most frequent values at the head of the sorted pairs, and least frequent at the tail.

Building a set of value:tallie pairs and sorting it is not a featherlight process. A potentially lighter way to do this is to grow a list of values read out of the set, and sort this list while it is growing. This can be an O(n) process, the list of sorted values can be lighter to create than a list of value:tallie pairs.

A 'Nose Ring Buffer' capable of this can be implemented with a single fixed array and a few pointers.
It begins as a familiar cyclic ring buffer, and grows a 'nose' at its head where repeat values can be bubble sorted as they hit previous occurences in the array.

function sniff(vals)
{	
	buff  = new Array(vals.length)
	
	ring_max = vals.length
	ring_fills = 0
	nose_max = Math.floor(ring_max/2)
	last_in_ring = ring_max
	nose_tip = 0
	
	top_tally = 0
	
  for( j=0 ; j<vals.length ; j++ ){
    cv=vals[j]
    
    if(nrbuff[0]===cv){ top_tally++ }
    else{
      for(var i=1; i<nrbuff.length ; i++){
        if(nrbuff[i]===cv) {
        
          if(i<=nose_tip){ dest = i-1 }else{ dest = nose_tip }
          
          if(i===1&&top_tally>1){
	          top_tally--
	        }else{
            nrbuff[i] = nrbuff[dest] //evict an element down
            nrbuff[dest] = cv        //swap hit element up
          }  
        }else{	  
          //not found, so write to ring
          if(last_in_ring === ring_fills) 
          {  
            if(ring_fills===ring_max){ 
              last_in_ring = nose_tip 
            }else{ 
              ring_fills++ 
            }
          }   
          nrbuff[++ringpin]=cv
        }
      }
    }
  }
}
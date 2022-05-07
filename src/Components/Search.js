import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Search(){
      const [term,setTerm]=useState('programming');
const [results,setResults]=useState([]);
const [debouncedTerm,setDebouncedTerm]=useState(term)
console.log(results);

useEffect(()=>{
const timerId=setTimeout(()=>{
      setDebouncedTerm(term);
},1000);
return()=>{
      clearTimeout(timerId);
}
},[term])

useEffect(()=>{
      const search=async()=>{
            const {data}=    await axios.get('https://en.wikipedia.org/w/api.php',{
                      params:{
                        action:'query',
                         list:'search',
                           origin:'*',
                           format:'json',
                          srsearch:debouncedTerm,
                      },
                });
              setResults(data.query.search);
          }
          search();

},[debouncedTerm]);

      const renderedList=results.map((result)=>{
            return(
                  <div key={result.pageid} className='item'>
                        <div className='right floated content'>
                              <a className='ui button'
                              href={`https://en.wikipedia.org?cuedid=${result.pageid}`}>
                                    Go
                              </a>
                        </div>
                        <div className='content'>
                              <div className='header'>
                                    {result.title}
                              </div>
                           
                              <span dangerouslySetInnerHTML={{ __html: result.snippet}}/>
                        </div>
                     
                  </div>
            )
      })

      return (
            <div className='ui form'>
                  <div className='field'>
<label>Enter the search term</label>
<input 
value={term}
onChange={(e)=>{setTerm(e.target.value)}}
className='input'  />
                  </div>
                  <div className='ui celled list'>{renderedList}</div>
            </div>
      );
}


export default Search;
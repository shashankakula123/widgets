import React, { useState } from 'react';

function Accordion({items}) {

const [activeIndex,setActiveIndex]=useState('');
      const handleClick=(index)=>{
            setActiveIndex(index);
      }


      
const renderedList=items.map((item,index)=>{

      const active=index===activeIndex ? 'active' : '';
      return(
            <React.Fragment key={item.title}>
                  <div className={`title ${active}`} onClick={()=>{handleClick(index)}}>
                        <i className='dropdown icon'></i>
                      {item.title}
        
                  </div>
                  <div className={`content ${active}`} >
                        {item.content}
                  </div>
            </React.Fragment>)
      
});


      return (
            <div className='ui styled accordion'>
       {renderedList}
            {activeIndex}
            </div>
      );
}
export default Accordion;
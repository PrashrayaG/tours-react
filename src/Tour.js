import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,removeTour}) => { // destructuring all the props which are properties from the object


  // toggle for read more (show info and hide it)
  const [readMore,setReadMore] = useState(false); // by default, we will hide the info

  return (

  <article className='single-tour'>
  <img src={image} alt={name} />

  <footer>
    <div className="tour-info">
      <h4>{name}</h4>
      <h4 className='tour=-price'>The price to visit this place is: ${price}</h4>
    </div>

      <p> {/*// toggle for read more (show info and hide it) */}

     {readMore ? info:`${info.substring(0,100)}...`}  {/* if the readmore is true then display the info,
     if the readMore is not true then we will look for info then we will run substring method. 
      substring(0,100) = gets part of the string . here 0 = starts with 0 words and 100 = text I want to show*/}
     
     {/* button that toggle the info */}

     <button onClick={()=> setReadMore(!readMore)}>  {/* !readmore = whatever is the value, we will pass the opposite. if the readmore is true then value will be false and vise versa */}
      {readMore ? 'Show Less': 'Read More'}  {/* checking state value(readMore). if it is true then that means we are displaying the full info. so then display show less... 

        but if the value is false then that means the name in button should be read more
       */}
     </button>
      </p>

    {/* to remove the tour from the list */}
    <button className='delete-btn' onClick={()=> removeTour(id)}>
      Not Interested for this place</button>

  </footer>
  </article>
  );
};

export default Tour;

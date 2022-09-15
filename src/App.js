import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(true); // by default loading is true
  // const [loading,setLoading] = useState(false); // by default loading is false
  const [tours,setTours] = useState([]);

// removing the tour (individual)
const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }


// fetching the data

const fetchTours = async () => {
  setLoading(true);

  // fetch my tours

  // also adding that in try catch
  try {
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);  // tours that we fetched from API

  } catch (error) {
    setLoading(false);
    console.log(error);
  }

  
  console.log(tours)
};

//invoking fetchTours once the component renders
useEffect(()=> {
fetchTours();
},[]) // empty array []= so that the component only runs once


  if(loading) { // if loading is true, then
    return <main>
      <Loading/>
    </main>
  }
  // adding a condition if there are no tours(if user clicked not interested of tours in browser)
  if(tours.length === 0) { // if we have no tours in state value of tours
    return (
      <main>
        <div className='title'>
        <h2>No tours Left. Refresh to see more tour places.</h2>

        {/* <button onClick={()=> fetchTours()}>Refresh</button> */}
        <button className='btn' onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <>
    <main>
       <Tours tours={tours} removeTour={removeTour}/>  {/* tours prop = tours state value*/}
    </main>
    </>
  )
}

export default App

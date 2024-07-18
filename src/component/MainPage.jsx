import React, { useState } from 'react';
import Meals from './Meals';
import { ReactTyped } from "react-typed";

const MainPage = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
 

  const getData = async () => {
    if(search == ""){
      alert("please Enter Something");
    }
    else{
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        
        const finalRes = await res.json();
        setData(finalRes.meals);
      } catch (err) {
        setError(err.message);
      } 
    };
  

    }

    
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className=" bg-orange-300 w-full ">
      
      <div className="shadow-xl flex flex-col sm:flex-row p-8 sm:p-4 items-center justify-center sm:justify-center sm:item-center">
      
        <input
          type="text"
          placeholder='Search Recipe Here'
          className=" p-3 mr-1 border-none rounded-md bg-slate-600 text-white"
          onChange={handleInput}
        />
        <button
          onClick={getData}
          className="  p-3 w-20 border rounded-lg bg-slate-500 text-black"
        >
          Search
        </button>
      </div >
      <div className=" md:px-12 justify-center items-center ">
      <h1 className="color-slate-700 text-xl md:p-14 p-3 md:text-3xl justify-center items-center">
     
      <ReactTyped strings={["You can Search Recipe Here, Get any Food Recipe,Ex Cake..Biryani..Paneer.."]} 
      typeSpeed={100} 
      loop={true}
      />
      
      </h1>
      </div>
      <div>
        
          <Meals detail={data} />
        
      </div>
    </div>
   
  );
};

export default MainPage;

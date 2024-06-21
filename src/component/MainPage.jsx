import React, { useState } from 'react';
import Meals from './Meals';

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
    <div className="main bg-orange-300  ">
      <div className="searchbar mb-20 flex items-center justify-center">
        <input
          type="text"
          className="mt-20 p-3 mr-1 border-none rounded-md bg-slate-600 text-white"
          onChange={handleInput}
        />
        <button
          onClick={getData}
          className="mt-20 p-3 w-20 border rounded-lg bg-slate-500 text-black"
        >
          Search
        </button>
      </div >
      <div>
        
          <Meals detail={data} />
        
      </div>
    </div>
  );
};

export default MainPage;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReactTyped } from "react-typed";

const Recipe = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getMealid = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const finalRes = await res.json();
        console.log(finalRes.meals[0]);
        setInfo(finalRes.meals[0]);
      } catch (error) {
        console.error('Error fetching the meal data:', error);
      }
    };

    if (mealid) {
      getMealid();
    }
  }, [mealid]);

  return (
    <>
      {
        !info ? "Data not found" :
        <div className="shadow-xl w-full h-screen bg-orange-300 h-90vh mx-auto md:grid md:grid-cols-2 content-center">
          <img src={info.strMealThumb} className=" md:mt-20 ml-10 p-4 object-cover w-[350px] h-[400px] md:w-[400px] md:h-[400px] rounded-lg" alt={info.strMeal} />
          <div className="mt-10 p-4 object-cover px-4 font-semibold">
            <h1 className=" font-bold text-2xl md:text-3xl font-sans ">
            <ReactTyped strings={["Recipe Here..."]} typeSpeed={100} loop={true}/>
            </h1>
            <button className="rounded-2xl  bg-red-700 p-1 mt-5">{info.strMeal}</button>
            <h3 className=" font-semibold mt-4 mb-3 text-2xl md:text-3xl">
              <ReactTyped strings={["Instruction.............."]}
               typeSpeed={100}
               loop={true} 
              />
              </h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      }
    </>
  );
};

export default Recipe;

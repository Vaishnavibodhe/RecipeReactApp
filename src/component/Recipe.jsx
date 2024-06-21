import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
        <div className="recipe w-full h-screen bg-orange-400 h-90vh m-auto flex gap-22 content-center">
          <img src={info.strMealThumb} className=" m-8 object-cover w-[400px] h-[400px] rounded-lg" alt={info.strMeal} />
          <div className="mt-20 ml-10 font-semibold">
            <h1 className=" font-semibold text-xl">Recipe Details</h1>
            <button className="rounded-2xl bg-red-700 p-1 mt-5 text-white">{info.strMeal}</button>
            <h3 className=" font-semibold mt-4 mb-3 text-xl">Instruction</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      }
    </>
  );
};

export default Recipe;

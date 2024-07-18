import React from 'react'
import {NavLink} from 'react-router-dom';

const Meals = ({detail}) => {
    console.log(detail);
  return (
   <div>
    <div className=" bg-orange-300 container md:p-5 md:ml-20 p-4">
       <div className=" meals-grid grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
       {!detail ? "" : detail.map((items)=>{
        return(

         <div className="meal-item  bg-white p-6 rounded-lg shadow-md">
        <img  className=" meal-img  object-cover rounded-md" src={items.strMealThumb}  />
        <p className="meal-name mt-4 ml-20 font-semibold" >{items.strMeal}</p>
        <NavLink to={`${items.idMeal}`}>
        <button className="rounded text-sm p-1 mt-2 ml-20 item-center bg-orange-400 text-white">Recipe Here</button>
        </NavLink>
        
        </div>
        
        )
       
       })
       }
       </div>
    </div>
    </div>
  )
}

export default Meals
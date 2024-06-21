import React from 'react'
import MainPage from "./component/MainPage";
import Recipe from "./component/Recipe";
import {Route ,Routes} from "react-router-dom";
const App = () => {
  return (

    <div className="app">
      
      <Routes>
        <Route  path="/" element={ <MainPage/> }/>
        <Route  path="/:mealid" element={ <Recipe/> }/>
        
      </Routes>
    </div>
  )
}

export default App
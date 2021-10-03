import React from  'react';
import Indian from'./Indian'
import {client} from '../client';
import{useEffect, useState} from 'react';
import Nav from '../Nav';




function Home  ()  {
const[recipes, setRecipes]= useState([]);
const[search, setSearch] = useState ('');
const[query, setQuery] = useState('Indian');

useEffect(() => {
  fetchContentful(); 
},[])

const fetchContentful = () => {
   client.getEntries()
   .then(response => 
     setRecipes(response.items))
     
  
}
console.log(recipes)

const updateSearch = e => {
setSearch(e.target.value);
}
const getSearch = e => {
e.preventDefault();
setQuery(search);
setSearch('')
}

return (
  <div className="App">
    
    
   
    <form onSubmit={getSearch} className="search">
                  <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
                  <button className="btn">search</button>
              </form>
    {recipes.map(recipe => {
     return (
       <div className="cookbook">
         
         <Indian 
         name={recipe.fields.description}
         calories={recipe.fields.calories}
         servings={recipe.fields.servings}
         region={recipe.fields.region}
         picture={recipe.fields.image.fields.file.url}
         description={recipe.fields.image.fields.description}
         ingredients={recipe.fields.ingredients}
        steps= {recipe.fields.steps}
         />


        
       </div>

     ) 
     })}
  </div>
);
    }
export default Home;
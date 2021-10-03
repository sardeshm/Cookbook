import React from 'react';

const Indian = ({name,calories,servings,region,description,ingredients,steps,picture}) => {
    
    return(
        <div>
            
            <main className="container">
                
            <h2>{name}</h2>
            <ul className="calories">
               
                <li> Calories: {calories}</li>
                <li> Servings: {servings}</li>
                <li> Region: {region}</li>
               

            </ul>
            <img className="img" src={picture} alt ="food"/>

            <p className="description">{description}</p>
            

            <ul className="ingredient"> <h4>Ingredients</h4>
                
            {ingredients.map(ingredients => (
                   <li>{ingredients}</li>
                   ))}
                   </ul>
            <div className="steps"><h4>Steps</h4>
                {steps.map(steps =>(
                   <p>{steps}</p>
                ))}
            </div>
             
             
            </main>
           
        </div>
    );
}
export default Indian;
import React from "react";
import "./App.css";
import "../src/home.css";
function App() {
 

  return (
    <>
      <main className="main">
        <div className="image_container">
          <img
            src='/src/assets/image-omelette.jpeg'
            className="image"
          />
          {/* <img src={omelette} alt='omelette image' className='{style.image}'/> */}
        </div>
        <section className="section">
          <h1>Simple Omelette Recipe</h1>
          <p className="description">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="preparation_container">
            <h2 className="prepation_header">Preparation time</h2>
            <ul className="list">
              <li className="preparation_list_items">
                <span>Total:</span> Approximately 10 minutes
              </li>
              <li className="preparation_list_items">
                <span>Preparation:</span> 5 minutes
              </li>
              <li className="preparation_list_items">
                <span>Cooking:</span> 5 minutes
              </li>
            </ul>
          </div>
        </section>
        <section className="section">
          <div className="ingredient_container">
            <h2 className="section_heading">Ingredients</h2>
            <ul className="list">
              <li className="list-items">2-3 large eggs</li>
              <li className="list-items">salt, to taste</li>
              <li className="list-items">papper, to taste</li>
              <li className="list-items">1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
        </section>
        <section className="section">
            <h2 className="section_heading">Instructions</h2>
            <ol className="list_inst">
              <li className="list_items">
                <span>Beat the eggs: </span>In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </li>
              <li className="list_items">
                <span>Heat the pan: </span>Heat the pan: Place a non-stick
                frying pan over medium heat and add butter or oil.
              </li>
              <li className="list_items">
                <span>Cook the omelette: </span>Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>
              <li className="list_items">
                <span>Add fillings (optional): </span>When the eggs begin to set
                at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li className="list_items">
                <span>Fold and serve: </span>As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </li>
              <li className="list_items">
                <span>Enjoy: </span>Serve hot, with additional salt and pepper
                if needed.
              </li>
            </ol>
        </section>
        <section className="section">
         
          <h2 className="section_heading">Nutrition</h2>
          <p className=''>  The table below shows nutritional values per serving without the additional fillings.</p>
          <table className="table">
      <tbody>
        <tr>
          <td>Calories</td>
          <td>277kcal</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>20g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>22g</td>
        </tr>
      </tbody>
          </table>
          
        </section>
      </main>
      <footer className='footer'>
        <div>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://myportfolio-661rmoecp-shalini0002s-projects.vercel.app/">Shalini Sharma</a>.
        </div>
      </footer>
    </>
  );
}

export default App;

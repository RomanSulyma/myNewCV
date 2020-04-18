import React from 'react';
import './css/grid.css';
import './css/style.css';
import Photo from './photo.jpg'

function App() {
  return (
    <div className="App">

      <div className="row">
        <a href="https://www.linkedin.com/in/sulima-roman/" target="_blank"><img src={Photo}/></a>
      </div>

      <div className="row">
        <ul>
          <li><a href="https://drive.google.com/open?id=1UWD1A-hz8JOIEsqzKoZfkACWNkFhO3WC" target="_blank">CV</a></li>
        </ul>
      </div>

      <h1>MY PROJECTS</h1>

      <div className="row">
        <ul>
          <li><a href="https://github.com/RomanSulyma/MyShop" target="_blank">MyShop project</a></li>
          <li><a href="https://github.com/RomanSulyma/image-resizer" target="_blank">Image resizer project (Spring)</a>
          </li>
          <li><a href="https://github.com/RomanSulyma/MyResume" target="_blank">Social network project (Spring,
            Hibernate)</a></li>
          <li><a href="https://github.com/RomanSulyma/BudgetPlannerES6" target="_blank">Budget planner project (JS,
            ES6)</a></li>
          <li><a href="https://github.com/RomanSulyma/CocktailSearch" target="_blank">Cocktail search project (JS,
            ES6)</a></li>
          <li><a href="https://github.com/RomanSulyma/cocktail_project_design" target="_blank">Cocktail company design
            project (hTML5, CSS3)</a></li>
        </ul>
      </div>

    </div>
  );
}

export default App;

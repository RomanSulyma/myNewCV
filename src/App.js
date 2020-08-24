import React from 'react';
import './css/grid.css';
import './css/style.css';
import Photo from './photo.jpg'

function App() {
  return (
    <div className="App">

      <div className="row">
        <a href="https://www.linkedin.com/in/sulima-roman/" target="_blank" rel="noopener noreferrer">
            <img src={Photo} alt={'No photo downloaded :('} title="LinkedIn" />
        </a>
      </div>

      <div className="row">
        <ul>
          <li><a href="https://drive.google.com/file/d/1CMIpfOFO1AsSgSOPMOMs51p-12iXfNBl/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a></li>
        </ul>
      </div>

      <h1 className="row">MY PROJECTS</h1>

      <div className="row">
        <ul>
          <li><a href="https://github.com/RomanSulyma/MyShop" target="_blank" rel="noopener noreferrer">MyShop project</a></li>
          <li><a href="https://github.com/RomanSulyma/image-resizer" target="_blank" rel="noopener noreferrer">Image resizer project (Spring)</a></li>
          <li><a href="https://github.com/RomanSulyma/MyResume" target="_blank" rel="noopener noreferrer">Social network project (Spring, Hibernate)</a></li>
          <li><a href="https://github.com/RomanSulyma/BudgetPlannerES6" target="_blank" rel="noopener noreferrer">Budget planner project (JS, ES6)</a></li>
          <li><a href="https://github.com/RomanSulyma/CocktailSearch" target="_blank" rel="noopener noreferrer">Cocktail search project (JS, ES6)</a></li>
          <li><a href="https://github.com/RomanSulyma/cocktail_project_design" target="_blank" rel="noopener noreferrer">Cocktail company design project (HTML5, CSS3)</a></li>
          <li><a href="https://github.com/RomanSulyma/burger_builder" target="_blank" rel="noopener noreferrer">Burger builder project front-end (React, ES6)</a></li>
          <li><a href="https://github.com/RomanSulyma/burger-builder-back-end" target="_blank" rel="noopener noreferrer">Burger builder project back-end (Spring)</a></li>
          <li><a className={'deployed'} href="http://18.156.3.212:5000" target="_blank" rel="noopener noreferrer">Burger builder project deployed</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;

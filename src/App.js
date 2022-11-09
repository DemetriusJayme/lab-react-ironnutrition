//App.js

import { useState } from 'react';
import './App.css';
import foods from './foods.json';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div className="App">
      {allFoods.map((food) => {
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} width={50} alt={food.name} />
          </div>
        );
      })}
    </div>
  );
}

export default App;

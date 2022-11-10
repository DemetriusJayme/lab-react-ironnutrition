//App.js - É o pai da aplicação

import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox.js';
import { Row, Divider, Button, Input } from 'antd';
import SearchBar from './components/SearchBar';
import AddFoodForm from './components/AddFoodForm';

function App() {
  //useState é como o react quer que a gente crie nossas variáveis
  //const [variável, função que altera o valor da variável] = useState(valorInicial)
  //useState

  const [allFoods, setAllFoods] = useState(foods);
  const [search, setSearch] = useState('');

  const [food, setFood] = useState({
    name: 'Orange',
    calories: 85,
    image: 'https://i.imgur.com/abKGOcv.jpg',
    servings: 1,
  });

  //return que fica na mesma linha não precisa de ()
  //No JSX
  return (
    //useState
    <div className="App">
      <SearchBar search={search} setSearch={setSearch} />

      {allFoods
        .filter((food) => {
          return food.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((food) => {
          return <FoodBox food={food} key={food.name} />;
        })}

      <FoodBox food={food} nomeDaProp={'karen'} />

      {allFoods.map((food) => {
        return <FoodBox food={food} />;
      })}

      {/* 
      {allFoods.map((food) => {
        return (
          <div key={food.name}>
            <p> {food.name} </p>
            <img src={food.image} width={100} alt={food.name} />
          </div>
        );
      })} */}
    </div>
  );
}

export default App;

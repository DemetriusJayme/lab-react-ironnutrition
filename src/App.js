import 'antd/dist/antd.css';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button, Input } from 'antd';
import SearchBar from './components/SearchBar';
import AddFoodForm from './components/AddFoodForm';
function App() {
  //useState é como o react quer que a gente crie nossas variáveis
  // const [variável, função que altera o valor da variável] = useState(valorInicial)
  //useState() é a descontrução de uma array
  const [allFoods, setAllFoods] = useState(foods);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  function handleShowForm() {
    setShowForm(!showForm);
  }
  console.log(showForm);
  /* const [food, setFood] = useState({
    name: 'Orange',
    calories: 85,
    image: 'https://i.imgur.com/abKGOcv.jpg',
    servings: 1,
  }) */
  //return que fica na MESMA LINHA não precisa ()
  //No jsx PRECISA TER APENAS UM PAI!!!
  return (
    <div className="App">
      {/* JSX -> começa com HTML -> js -> html -> js  */}
      {/*  aqui eu estou renderizando apenas UM CARD
      <FoodBox
        food={food}
      />  */}
      {showForm === true && (
        <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
      )}
      <Button onClick={handleShowForm}>
        {showForm === true ? <span>Hide Form</span> : <span>Add New Food</span>}
      </Button>
      <SearchBar search={search} setSearch={setSearch} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* renderizando a lista de comidas */}
        {allFoods
          .filter((food) => {
            return (
              food.name.toLocaleLowerCase().includes(search.toLowerCase()) ||
              String(food.calories).includes(search)
            );
          })
          .map((food) => {
            return (
              <FoodBox
                food={food}
                key={food.name}
                allFoods={allFoods}
                setAllFoods={setAllFoods}
              />
            );
          })}
      </Row>
    </div>
  );
}
export default App;

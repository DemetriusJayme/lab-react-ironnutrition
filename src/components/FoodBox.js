//Todo componente é uma função
//È uma função que retorna HTML (JSX)
import { Card, Col, Button } from 'antd';

//TODO COMPONENTE É UMA FUNÇÃO!!!
//É UMA FUNÇÃO QUE RETONAR HTML (JSX)
// props = {}
function FoodBox({ food }) {
  // console.log(props) -> props é um OBJETO por isso ele pode ser descontruido!!

  console.log(food); // -> name: "orange", calories: 85

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;

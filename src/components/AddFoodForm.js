import { Divider, Input } from 'antd';
import { useState } from 'react';
function AddFoodForm({ allFoods, setAllFoods }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });
  function handleChange(e) {
    console.log(e.target.name); // -> me trás o nome do input -> o nome da minha key do obj form
    console.log(e.target.value); // -> me trás a tecla pressionada!
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  console.log(form);
  function handleSubmit(e) {
    e.preventDefault();
    //é responsável por guardar o form preenchido em algum lugar -> allFoods
    setAllFoods([...allFoods, form]);
  }
  return (
    <form>
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
      <Input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label>Image</label>
      <Input
        type="text"
        name="image"
        value={form.image}
        onChange={handleChange}
      />
      <label>Calories</label>
      <Input
        type="number"
        name="calories"
        value={form.calories}
        onChange={handleChange}
      />
      <label>Servings</label>
      <Input
        type="number"
        name="servings"
        value={form.servings}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Salvar food!</button>
    </form>
  );
}
export default AddFoodForm;

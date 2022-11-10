const food = {
  name: 'Pizza',
  calories: 400,
  image: 'https://i.imgur.com/eTmWoAN.png',
  servings: 1,
};
//quando é um objeto, a ordem não importa, porque objs não tem INDEX, tem PROPRIEDADES
const { servings, name, calories, image } = food;
console.log(calories);
//quando é uma array, a ordem IMPORTA, pois a array é INDEXADA!! você pode dar o nome que quiser, porém resepeitando o index
const array = ['karen', 'tiberio', 'priscila', 'dani'];
const [professora, aluno2, aluno3, ta] = array;
console.log(ta);

//SPREAD
console.log(food);
//spread me da a oportunidade de adicionar item ao objeto clonado!!
const food2 = { ...food, category: 'junk food', saudavel: false };
console.log('FOOD2', food2);
//spread me da a oportunidade de MODIFICAR PROPRIEDADES EXISTENTES!!!
const food3 = { ...food2, calories: 200, saudavel: true, servings: 2 };
console.log('FOOD3', food3);

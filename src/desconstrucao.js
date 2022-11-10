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

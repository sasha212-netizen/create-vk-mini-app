import React, { useState } from 'react';

const ingredients = [
  { id: 1, name: 'Рис', points: 5 },
  { id: 2, name: 'Семга', points: 10 },
  { id: 3, name: 'Авокадо', points: 8 },
  { id: 4, name: 'Нори', points: 6 },
  { id: 5, name: 'Крем-сыр', points: 7 },
];

const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [score, setScore] = useState(0);

  const addIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
      setScore(score + ingredient.points);
    }
  };

  const resetGame = () => {
    setSelectedIngredients([]);
    setScore(0);
  };

  return (
    <div className="App">
      <header>
        <h1>Собери идеальный ролл 🍣</h1>
      </header>
      <main>
        <h2>Выбери ингредиенты:</h2>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              <button onClick={() => addIngredient(ingredient)}>
                {ingredient.name} (+{ingredient.points} очков)
              </button>
            </li>
          ))}
        </ul>
        <h2>Ваш результат: {score} очков</h2>
        {score >= 30 && (
          <div>
            <h3>🎉 Вы выиграли промокод! 🎉</h3>
            <p>Ваш промокод: <b>ROLL30</b></p>
          </div>
        )}
        <button onClick={resetGame}>Начать заново</button>
      </main>
    </div>
  );
};

export default App;

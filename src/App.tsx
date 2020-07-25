import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { Container } from './style';


function App() {

  const [meal, setMeal] = useState<any>({});

  return (
    < Container>
      <Header setMeal={setMeal} />
      {meal.strMeal && <Body meal={meal} />}
    </ Container>
  );
}

export default App;

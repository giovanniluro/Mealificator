import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';


function App() {

  const [meal, setMeal] = useState<any>({});

  return (
    <>
      <Header setMeal={setMeal} />
      <Body meal={meal} />
    </>
  );
}

export default App;

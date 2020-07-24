import React, { useCallback, useState } from 'react';
import { Container } from './style';
import { FiSearch } from 'react-icons/fi';
import api from '../../services/api';

const Header: React.FC = () => {

  const [timer, setTimer] = useState<number>(0);
  const [foodList, setFoodList] = useState<string[]>([]);

  const handleRandom = useCallback(async () => {
    const meal = await api.get('/random.php').then(response => console.log(response.data));
    console.log(meal);
  }, []);

  const handleChoose = useCallback((name) => {
    console.log(name);
    setFoodList([]);
  }, []);

  const searchMeals = useCallback(async (value) => {
    clearInterval(timer);

    const timeOut = setTimeout(() => {

      const meals: string[] = [];
      console.log('Buscando na API...');

      api.get(`/search.php?s=${value}`).then(response => {
        if (response.data.meals && value !== '') response.data.meals.map((meal: any) => meals.push(meal.strMeal));
      }).then(() => setFoodList(meals));

    }, 400);

    setTimer(timeOut);

  }, [timer]);

  return (
    <Container>
      <div>
        <input type="text" onChange={(e) => searchMeals(e.target.value)} onBlur={(e) => { e.target.value = '';}} />
        {foodList.length > 0 &&
          <ul>
            {foodList.map(food => <li onClick={() => handleChoose(food)} key={food}>{food}</li>)}
          </ul>
        }
      </div>
      <FiSearch size={24} />
      <button onClick={handleRandom}>
        Find me a random meal!
      </button>
    </Container>
  )

}

export default Header;
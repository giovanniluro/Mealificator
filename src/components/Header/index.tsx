import React, { useCallback, useState } from 'react';
import { Container } from './style';
import { FiSearch } from 'react-icons/fi';
import api from '../../services/api';

interface HeaderProps {
  setMeal: (meal: any) => void;
}

const Header: React.FC<HeaderProps> = ({setMeal}) => {

  const [timer, setTimer] = useState<number>(0);
  const [foodList, setFoodList] = useState<string[]>([]);

  //Choosing a random meal
  const handleRandom = useCallback(async () => {
    const meal = await api.get('/random.php');
    setMeal(meal.data.meals[0]);
  }, [setMeal]);

  //Handling the choosen recipe from the list
  const handleChoose = useCallback(async (name) => {
    setFoodList([]);
    const meal = await api.get(`/search.php?s=${name}`);   
    setMeal(meal.data.meals[0]); 
  }, [setMeal]);

  //Getting the recipes with names like the user input
  const searchMeals = useCallback(async (value) => {
    clearInterval(timer);
    setFoodList([]);

    const timeOut = setTimeout(() => {

      const meals: string[] = [];

      api.get(`/search.php?s=${value}`).then(response => {
        if (response.data.meals && value !== '') response.data.meals.map((meal: any) => meals.push(meal.strMeal));
      }).then(() => setFoodList(meals));

    }, 400);

    setTimer(timeOut);

  }, [timer]);

  return (
    <Container>
      <div>
        <input type="text" onChange={(e) => searchMeals(e.target.value)} onBlur={(e) => { e.target.value = ''; setTimeout(() => { setFoodList([]) }, 500) }} />
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
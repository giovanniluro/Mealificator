import React, { useEffect, useState } from 'react';
import { Container, FoodInfo, Tag, FoodPrepare, Ingredients } from './style';

interface BodyProps {
  meal: any;
}

interface Ingredients {
  name: string,
  quantity: string;
}

const Body: React.FC<BodyProps> = ({ meal }) => {

  const [ingredients, setIngredients] = useState<Ingredients[]>([]);
  const [tags, setTags] = useState<string[]>([]);


  useEffect(() => {
    const rows = [];
    console.log(meal.strYoutube + 'autoplay=1');

    for (var i = 1; i < 21; i++) {
      if (meal[`strIngredient${i}`] === '') break;
      let name = meal[`strIngredient${i}`];
      let quantity = meal[`strMeasure${i}`];
      rows.push({ name, quantity });
    }

    if (meal.strTags) {
      let tags = meal.strTags.split(',');
      setTags(tags);
    }

    setIngredients(rows);
  }, [meal]);

  return (
    <Container>
      <FoodInfo>
        <div>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <div>
            <h1>{meal.strMeal}</h1>
            <p><span>Category:</span>{meal.strCategory}</p>
            <p><span>Culture:</span>{meal.strArea}</p>
            {tags.map(tag =>
              <Tag key={tag}>{tag}</Tag>
            )}
          </div>

          <Ingredients>
            <h2>Ingredients:</h2>
            {ingredients.map(ingredient => {
              if (ingredient.name !== '') {
                if (ingredient.quantity !== '') {
                  return (
                    <p><span>{ingredient.name}:</span>{ingredient.quantity}</p>
                  );
                } else {
                  return (
                    <p><span>{ingredient.name}</span></p>
                  );
                }
              }
            })}
          </Ingredients>
        </div>
        <FoodPrepare>
          <h2>How to prepare:</h2>
          <p>{meal.strInstructions}</p>
          <iframe title="Recipe video" allow='autoplay' src={meal.strYoutube.replace('watch?v=', 'embed/') + '?autoplay=1&modestbranding=1&rel=0'}></iframe>
        </FoodPrepare>
      </ FoodInfo>
    </Container>
  )

};

export default Body;
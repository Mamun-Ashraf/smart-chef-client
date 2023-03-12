import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodItems from './FoodItems';

const FoodAll = () => {
    const foods = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-12 my-5'>
            {
                foods.map(food => <FoodItems
                    key={food._id}
                    food={food}
                ></FoodItems>)
            }
        </div>
    );
};

export default FoodAll;
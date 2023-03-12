import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodItems from './FoodItems';

const Foods = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/foods")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div>
            <h2 className='text-4xl text-pink-600 mb-12'>Food Items we provide:</h2>
            <div className='grid grid-cols-3 gap-12 my-5'>
                {
                    foods.map(food => <FoodItems
                        key={food._id}
                        food={food}
                    ></FoodItems>)
                }
            </div>

            <Link to='foodAll'>
                <button type="button" className="flex items-center justify-center px-12 py-3 mx-auto my-10 font-semibold  rounded-md btn btn-outline btn-primary">See All</button>
            </Link>
        </div>
    );
};

export default Foods;
import React from 'react';

const FoodItems = ({ food }) => {
    const { name, image } = food;
    return (
        <div className=" rounded-md shadow-md bg-gray-200 text-gray-800">
            <h2 className="text-3xl font-semibold tracking-wide mb-4 px-6">{name}</h2>
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />

        </div>
    );
};

export default FoodItems;
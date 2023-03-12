import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItems = ({ item }) => {
    const { _id, name, image, price, description } = item;
    return (
        <div>
            <div className=" rounded-md shadow-md bg-gray-200 text-gray-800">
                <h2 className="text-3xl font-semibold tracking-wide mb-4 px-6">{name}</h2>
                <h3 className='text-xl mb-4 px-6'>Price: ${price}</h3>
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div>
                        <p className="text-gray-800">{description}</p>
                    </div>
                    <Link to={`/services/${_id}`}>
                        <button type="button" className="flex items-center justify-center w-1/2 p-3 font-semibold rounded-md btn btn-outline btn-secondary mx-auto">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItems;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const details = useLoaderData();
    const { _id, name, image, rating, price, description } = details;
    return (
        <div>
            <div className=" rounded-md shadow-md bg-gray-200 text-gray-800">
                <h2 className="text-3xl font-semibold tracking-wide mb-4 px-6">{name}</h2>
                <h3 className='text-xl mb-4 px-6'>Price: ${price}</h3>
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div>

                        <p className="text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-1/2 p-3 font-semibold rounded-md btn btn-outline btn-secondary mx-auto">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
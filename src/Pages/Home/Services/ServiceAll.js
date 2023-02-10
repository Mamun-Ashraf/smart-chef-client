import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceItems from './ServiceItems';

const ServiceAll = () => {
    const items = useLoaderData();
    console.log(items);
    return (
        <div className='grid grid-cols-3 gap-12 my-5'>
            {
                items.map(item => <ServiceItems
                    key={item._id}
                    item={item}
                ></ServiceItems>)
            }
        </div>
    );
};

export default ServiceAll;
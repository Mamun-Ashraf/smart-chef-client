import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceItems from './ServiceItems';

const Services = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl text-pink-600 mb-12'>Services We Provide:</h2>
            <div className='grid grid-cols-3 gap-12 my-5'>
                {
                    items.map(item => <ServiceItems
                        key={item._id}
                        item={item}
                    ></ServiceItems>)
                }
            </div>
            <Link to='/serviceAll'>
                <button type="button" className="flex items-center justify-center px-12 py-3 mx-auto my-10 font-semibold  rounded-md btn btn-outline btn-primary">See All</button>
            </Link>
        </div>
    );
};

export default Services;
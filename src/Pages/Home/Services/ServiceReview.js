import React from 'react';

const ServiceReview = ({ rev }) => {
    const { review, displayName, photoURL } = rev;
    return (
        <div className='flex my-8 items-center'>
            <img src={photoURL} alt='' className='mx-5 rounded-full w-1/6' />
            <div>
                <h2 className='font-bold'>{displayName}</h2>
                <h3>{review}</h3>
            </div>
        </div>
    );
};

export default ServiceReview;
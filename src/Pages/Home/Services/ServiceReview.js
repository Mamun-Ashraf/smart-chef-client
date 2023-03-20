import React from 'react';

const ServiceReview = ({ releventServiceReview }) => {
    const { userReview, userName, userImage } = releventServiceReview;
    return (
        <div className='flex my-8 items-center'>
            <img src={userImage} alt='' className='mx-5 rounded-full w-1/6' />
            <div>
                <h2 className='font-bold'>{userName}</h2>
                <h3>{userReview}</h3>
            </div>
        </div>
    );
};

export default ServiceReview;
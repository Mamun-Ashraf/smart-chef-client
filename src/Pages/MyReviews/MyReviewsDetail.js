import React from 'react'
import { FaEdit } from 'react-icons/fa';

const MyReviewsDetail = ({ specificUserReview }) => {
    const { _id, serviceName, serviceImage, userReview } = specificUserReview;

    const handleUpdateReview = _id => {
        fetch(`https://smart-chef-server.vercel.app/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ userReview })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if(data.modifiedCount > 0){

                // }
            })
    }

    const handleDeleteReview = _id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://smart-chef-server.vercel.app/reviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }
    return (
        <div className='flex items-center my-12'>
            <img src={serviceImage} alt='' className='w-1/6 mr-5' />
            <div>
                <h2 className='font-bold'>{serviceName}</h2>
                <p className='mb-3'>{userReview}</p>
                <button onClick={() => handleUpdateReview(_id)} className='mr-5'><FaEdit></FaEdit></button>
                <button onClick={() => handleDeleteReview(_id)}>X</button>
            </div>
        </div>
    );
};

export default MyReviewsDetail;
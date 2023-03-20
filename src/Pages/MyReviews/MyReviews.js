import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewsDetail from './MyReviewsDetail';

const MyReviews = () => {

    const { user } = useContext(AuthContext);

    const reviews = useLoaderData();

    const specificUserReviews = reviews.filter(review => review?.userEmail === user?.email);

    // const handleDeleteReview = id => {
    //     const proceed = window.confirm('Are you sure, you want to delete?');
    //     if (proceed) {
    //         fetch(`https://smart-chef-server.vercel.app/reviews/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 const remaining = specificUserReviews.filter(specificUserRev => )
    //             })
    //     }
    // }

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                specificUserReviews.map(specificUserReview => <MyReviewsDetail
                    key={specificUserReview._id}
                    specificUserReview={specificUserReview}
                ></MyReviewsDetail>)
            }
        </div>
    );
};

export default MyReviews;
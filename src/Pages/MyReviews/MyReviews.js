import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {

    const { user } = useContext(AuthContext);

    const reviews = useLoaderData();

    const [specificReviews, setSpecificReviews] = useState([]);

    const specialReviews = reviews.filter(rev => rev?.email === user?.email);
    useEffect(() => {
        setSpecificReviews(specialReviews);
    }, [])

    return (
        <div>
            <h2>My reviews page</h2>
            <div className='mx-auto w-1/2 mb-12'>
                <div className=" rounded-md shadow-md bg-gray-200 text-gray-800">
                    <h2 className="text-3xl font-semibold tracking-wide mb-4 px-6">my reviews</h2>
                    <h3 className='text-xl mb-4 px-6'>Price: ${ }</h3>
                    <img src='' alt="" className="object-cover object-center w-full rounded-t-md h-72 mb-5 bg-gray-500" />
                    <p className="text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                </div>
            </div>
            <div>

                {
                    specificReviews.map(specificReview => <p key={specificReview._id}>{specificReview.review} {specificReview.displayName} {
                        <img src={specificReview.photoURL} alt='' />
                    }
                        <button className='btn btn-outline btn-primary mr-12 my-12'>Edit review</button>
                        <button className='btn btn-outline btn-primary'>Delete review</button>
                    </p>)
                }

            </div>

        </div>
    );
};

export default MyReviews;
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ServiceReview from './ServiceReview';

const ServiceDetails = () => {

    const service = useLoaderData();
    const { _id, name, image, price, description } = service;

    const { user } = useContext(AuthContext);
    const displayName = user?.displayName;
    const photoURL = user?.photoURL;
    const email = user?.email;
    const id = _id;

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const handleReview = event => {
        event.preventDefault();
        const review = event.target.review.value;
        const reviewInfo = { id, review, displayName, photoURL, email }
        event.target.reset();

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json)
            .then(data => console.log(data))

    }

    const releventReviews = reviews.filter(releventReview => releventReview.id === id);

    return (
        <div className='flex'>
            <div className='mx-auto w-1/2 mb-12'>
                <div className=" rounded-md shadow-md bg-gray-200 text-gray-800">
                    <h2 className="text-3xl font-semibold tracking-wide mb-4 px-6">{name}</h2>
                    <h3 className='text-xl mb-4 px-6'>Price: ${price}</h3>
                    <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 mb-5 bg-gray-500" />
                    <p className="text-gray-800">{description}</p>
                </div>
            </div>
            <div>
                {
                    user?.uid ?

                        <form onSubmit={handleReview}>
                            <input type="text" name='review' placeholder="Please add your review" className="input input-bordered input-lg w-full mb-4" />
                            <button type="submit" className='btn btn-sm float-right'>Add review</button>
                        </form>
                        :
                        <h2 className='text-lg'>Please <Link to='/signin' className='text-blue-600'>Sign in</Link> to add your review</h2>
                }

                {
                    releventReviews.map(rev => <ServiceReview
                        key={rev._id}
                        rev={rev}
                    ></ServiceReview>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;
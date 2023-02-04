import React from 'react';
import './Banner.css'
import pic from "../../../Assets/kitchen-10.jpg";

const Banner = () => {
    return (
        <div className='relative'>
            <div className='banner-img'>
                <img className='w-full mx-auto my-10' src={pic} alt="" />
            </div>
            <div className='absolute  right-12 top-1/4'>
                <h2 className="text-5xl font-bold text-white">
                    <span className='text-pink-400'>Cooked With</span>
                    <br />
                    <span className='text-rose-200'>Mothers Hand !!!</span>
                </h2>
            </div>
            <br />
            <p className='absolute right-12 top-1/3 float-right w-1/3 text-white text-xl'>
                We serve <span className='text-3xl text-green-300'>completely home made</span> foods,
                <br />
                made by life long experienced(in cook) mothers/sisters.
                <br />
                We have no traditional Restaurant.
                <br />
                Only the proffesional and trained up mothers/sisters(housewife) are our cook partner(chef) who made your food with care in their own kitchen.</p>
        </div>
    );
};

export default Banner;
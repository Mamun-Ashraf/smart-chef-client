import React from 'react';
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ExtraSection1 from "../ExtraSection1/ExtraSection1";
import ExtraSection2 from "../ExtraSection2/ExtraSection2";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;
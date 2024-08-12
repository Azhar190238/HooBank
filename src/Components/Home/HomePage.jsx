import React from 'react';
import Hero from '../Hero/Hero';
import styles from '../../style';
import Statistics from '../Statistics';
import Business from '../Business';
import Billing from '../Billing';
import CardDeal from '../CardDeal';
import Testimonial from '../Testimonial';
import Clients from '../Clients';
import CTA from '../CTA';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Statistics></Statistics>
                    <Business></Business>
                    <Billing></Billing>
                    <CardDeal></CardDeal>
                    <Testimonial></Testimonial>
                    <Clients></Clients>
                    <CTA></CTA>
                    

                </div>
            </div>
        </div>
    );
};

export default HomePage;
import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';
const GetStared = () => {
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}>
            <div className={`${styles.flexCenter} w-[100%] h-[100%] rounded-full bg-primary flex-col `}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
                        <span className='text-gradient'>Get</span>
                    </p>
                    <img src={arrowUp} alt="arrow" className='h-[23px] w-[23px] object-contain' />
                </div>
                <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                    <span className='text-gradient'>Started</span>

                </p>
            </div>

        </div>
    );
};

export default GetStared;
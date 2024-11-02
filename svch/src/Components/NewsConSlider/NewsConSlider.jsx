import './NewsConSlider.css'
import { useState,useEffect } from 'react'
import NewsCon from '../NewsCon/NewsCon';
export default function NewsConSlider(){
    useEffect(()=>{
        let slider = document.querySelector('.slider');
        let sliderWidth = 0;
    },[])
    return(
        <main className='Home-news-con'>
            <section className='slider-con-and-button'>
                <div className='con-for-slider'>
                    <img src="./images/Prev.png" alt="" />
                        <div className='slider'>                   
                            <NewsCon/>
                        </div>
                    <img src="./images/Next.png" alt="" />
                </div>
                <button className='more-news-button'>
                    <p>
                        More news
                    </p>
                    </button>
            </section>
        </main>
    )
}
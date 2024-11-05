import './NewsConSlider.css'
import { useState,useEffect } from 'react'
import NewsCon from '../NewsCon/NewsCon';
export default function NewsConSlider(){
    useEffect(()=>{
        let slider = document.querySelector('.slider');
        let arrowright = document.querySelector('.right')
        let arrowleft = document.querySelector('.left')
        let sliderWidth = 4;
        let i = 0;
        arrowright.addEventListener('click',function(){
            if(i < sliderWidth - 1){
                i++
              }
              else{
                i = 0
              }
              slider.style.transform = `translateX(-${i*450}px)`;
        });
        arrowleft.addEventListener('click',function(){
    
            if(i > 0){
              i--;
            }
            else{
              i = sliderWidth -1;
            }
            slider.style.transform = `translateX(-${i*450}px)`;
          }
        )

    },[])
    return(
        <main className='Home-news-con'>
            <section className='slider-con-and-button'>
                <div className='con-for-slider'>
                    <img src="./images/Prev.png" alt="" className='left slider-button'/>
                    <div className='container-slider'>
                        <div className='slider'>                   
                            <NewsCon/>
                        </div>
                    </div>
                     
                    <img src="./images/Next.png" alt="" className='right slider-button'/>
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
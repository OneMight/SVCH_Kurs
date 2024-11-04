import Slider from 'react-slick';
import { useEffect,useState } from 'react';
import '../NewsCon/NewsCon.css'

export default function SimpleCarousel () {

    const [arrayNews, setNews] = useState([]);
    useEffect(()=>{
        const fetchNews = async ()=>{
            const response = await fetch('/jsonfiles/News.json');
            const data = await response.json();
            setNews(data);
        }
        fetchNews();


    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
  return (
    <Slider {...settings}>
        {arrayNews.map(News =>(
        <article className='News-container' key={News.id}>
            <div className='title-news'>
                <p className='title-text text-for-news'>
                    {News.title}
                </p>
                <div className='time-post'>
                    <img src="./images/time.png"/>
                    <p className='time text-for-news'>{News.time}</p>
                </div>
            </div>
            <div>
                <img src={News.img} alt="" />
            </div>
        </article>
        ))}
    </Slider>
    
  );
}
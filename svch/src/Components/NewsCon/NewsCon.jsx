import './NewsCon.css'
import { useEffect,useState } from 'react';
export default function NewsCon(props){
    const [arrayNews, setNews] = useState([]);
    useEffect(()=>{
        const fetchNews = async ()=>{
            const response = await fetch('/jsonfiles/News.json');
            const data = await response.json();
            setNews(data);
        }
        fetchNews();


    },[])
    return(
        arrayNews.map(News =>(
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
        ))
        
    )
}
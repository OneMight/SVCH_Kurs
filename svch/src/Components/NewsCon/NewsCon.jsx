import './NewsCon.css'
import { useEffect,useState } from 'react';
import {fetchNews} from '../../store/Slices/newsSlicer'
import { useDispatch,useSelector } from 'react-redux';
export default function NewsCon(){
    const dispatch = useDispatch();
    const arrayNews = useSelector(state => state.news.news)
    const status = useSelector(state => state.news)
    const News = arrayNews.data
    console.log(News)
    useEffect(()=>{
        dispatch(fetchNews())
    },[])
    if(status === 'loading' || status ===null){
        return <div>Loading</div>
    }
    return(
        News.map(News =>(
        <article className='News-container' key={News.idNews}>
            <div className='title-news'>
                <p className='title-text text-for-news'>
                    {News.desciption}
                </p>
                <div className='time-post'>
                    <img src="./images/time.png"/>
                    <p className='time text-for-news'>{new Date(News.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
            <div>
                <img src={`/images/${News.photo}`} alt="" />
            </div>
        </article>
        ))
        
    )
}
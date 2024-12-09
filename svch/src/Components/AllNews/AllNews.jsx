import './AllNews.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchNews} from '../../store/Slices/newsSlicer'
export default function AllNews(){
    const { error, status } = useSelector(state => state.news);

    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchNews())
    },[])
    const news = useSelector(state => state.news.news)
    const newsArray = news.data
  
    if(status === 'rejected'){
        return <div>Error: {error}</div>
    }
    if(status === 'loading' || status ===null || news === null){
       
        return <div>Loading: </div>
    }
    
    return(
        <main className='news-main'>
            <div className='help-div'>
                <p className='title-news-main'>All news in autosport</p>
                <div>
                    {newsArray.map(data =>(
                        <article className='news' key={data.idNews}>
                            <div className='news-title-con'>
                                <p>{data.desciption}</p>
                                <div className='time-news'>
                                    <img src="/images/watch.png" alt="" />
                                    <p>{new Date(data.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className='image-news'>
                                <img src={`/images/${data.photo}`} alt="" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}
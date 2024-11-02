import './HomeGroupCon.css'
import { useEffect,useState,useRef } from 'react';
export default function HomeGroupCon(props){

    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                   
                }
                else{
                    setIsVisible(false)
                }
            },
            {
                threshold: 0.2, 
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);
    return(
        <main className='main-home-group-con'>
            <section className='con-group'>
                <h1 className='Title'>{props.title}</h1>
                <p className='text'>{props.text}</p>          
                <img ref={imgRef} src={props.img} alt="" className={`image ${isVisible ? 'visible':""}`} />
            </section>
        </main>
    )
}
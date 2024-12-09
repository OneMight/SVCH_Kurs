import { useEffect, useState } from "react"
import Header from "../Header/Header"
import './HomeFirstCon.css'
import { Link } from "react-router-dom"
export default function HomeFirstCon(){
    const [isLogined, setLogined] = useState(false)
    const CheckLogin = () =>{
        if(localStorage.getItem('currentUser')){
            setLogined(true)
        }
    }
    useEffect(()=>{
        CheckLogin()
    },[])
    return(
        <main className="first-con">
            <div className="video-background">
                <video id="Back-video" autoPlay loop muted>
                    <source src='./video/backgroundvideo.mp4' />
                </video>
            </div>
            <Header/>
            <p className="Center-text">
                Circuit racing is more than <span className="racing">racing</span>
            </p>
            <div className="button-for-reg-log">
                {!isLogined ? (
                    <>
                        <Link to='/registration'><button className="button registration">registration</button></Link>
                        <Link to='/logining'><button className="button logining">log in</button></Link>
                    </>
                    
                ):(
                   <></> 
                )}
                
            </div>
        </main>
    )
}
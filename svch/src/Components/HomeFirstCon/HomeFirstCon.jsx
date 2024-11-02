import Header from "../Header/Header"
import './HomeFirstCon.css'
export default function HomeFirstCon(){
    return(
        <main className="first-con">
            <div className="video-background">
                <video id="Back-video" autoPlay loop muted>
                    <source src='./video/backgroundvideo.mp4' />
                </video>
            </div>
            <Header/>
            <p className="Center-text">
                Circuit racing is more than <span>racing</span>
            </p>
            <div className="button-for-reg-log">
                <button className="button registration">registration</button>
                <button className="button logining">log in</button>
            </div>
        </main>
    )
}
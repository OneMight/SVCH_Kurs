import HomeFirstCon from "../Components/HomeFirstCon/HomeFirstCon"
import HomeGroupCon from "../Components/HomeGroupCon/HomeGroupCon"
import NewsConSlider from "../Components/NewsConSlider/NewsConSlider"
export default function HomePage(){
    return(
        <>
            <HomeFirstCon/>
            <HomeGroupCon img='./images/F1-image.png' text='Formula 1 is a world championship in circuit racing, which is held annually and consists of stages, in accordance with the technical standards, requirements and rules established by the International Automobile Federation.' title='formula 1'/>
            <HomeGroupCon img='./images/GT3-image.png' text='The GT3 group, technically known as Cup Grand Touring Cars and commonly referred to simply as GT3, is a set of rules maintained by the Fédération Internationale de lAutomobile for grand tourer racing cars intended for use in various auto racing series around the world.' title='gt3'/>
            <HomeGroupCon img='./images/GT4-image.png' text='The European GT4 Series is a GT4 car racing series organized and run by SRO Stefan Ratel and sanctioned by the FIA. This is an amateur tournament modeled on the FIA ​​GT3 European Championship, and in contrast to the FIA ​​GT Championship, where professional racers compete in GT1 and GT2 cars.' title='gt4'/>
            <NewsConSlider/>
        </>
    )
}
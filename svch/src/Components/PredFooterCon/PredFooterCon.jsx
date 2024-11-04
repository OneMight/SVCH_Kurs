import './PredFooterCon.css'
export default function PredFooterCon(){
    return(
        <main className="pred-footer-con">
            <article className="text-and-photo">
                <div className="con-for-pred-footer">
                    <p className="text-pred-footer">
                        Analyzing the historical course of events in motorsport
                        in terms of the development and evolution of racing
                        and sports cars, it is not difficult to notice that
                        it is motorsport that gives rise to the development
                        of technology and drives the entire process of improving
                        the design of production cars. This happens because in
                        auto competitions certain technical ideas and solutions
                        are rapidly tested.
                    </p>
                </div>
                <img src="./images/image-pred-footer.png" alt="" />
            </article>
            <article className="text-and-photo">
                <img src="./images/two-cars.png" alt="" />
                <div className="con-for-pred-footer">
                    <p className="text-pred-footer">
                        For those who stood at its origins, motorsport is also
                        a kind of huge club of passionate people, and such races
                        will be an excellent occasion for everyone to get
                        together again as before.
                    </p>
                </div>
            </article>
        </main>
    )
}
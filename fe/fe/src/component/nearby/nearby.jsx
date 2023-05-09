import "./nearby.css"
import image from "./1.jpg"
import image2 from "./2.jpg"
import image3 from "./3.jpg"
import image4 from "./4.jpg"
import image5 from "./5.jpg"
import image6 from "./6.jpg"
const Nearby =() =>{
    return(
        <div className="main">
        <div className="nearby">Nearby Destinations <div className="nearbyDes">Nearby Destinations</div>
             <div className="nearbyAttraction">
                <img src={image} alt="" className="nearbyIMG" />
                <div className="nearbyTitle">
                    <h1>Danang</h1>
                    <h1>338 things to do</h1>
                </div>
             </div>
             <div className="nearbyAttraction">
                <img src={image2} alt=""className="nearbyIMG" />
                <div className="nearbyTitle">
                    <h1> Ho Chi Minh City</h1>
                    <h1> 235 things to do</h1>
                </div>
             </div>
             <div className="nearbyAttraction2">
                <img src={image3} alt=""className="nearbyIMG" />
                <div className="nearbyTitle">
                    <h1> Nha Trang</h1>
                    <h1> 37 things to do</h1>
                </div>
             </div>
             </div>
             <div className="nearby2">
                Nearby Destinations 
             <div className="nearbyAttraction2">
                <img src={image4} alt="" className="nearbyIMG2"/>
                <div className="nearbyTitle2">
                    <h1> Ha Noi</h1>
                    <h1> 213 things to do</h1>
                </div>
             </div>
             <div className="nearbyAttraction2">
                <img src={image5} alt="" className="nearbyIMG2"/>
                <div className="nearbyTitle2">
                    <h1>Hue</h1>
                    <h1>53 things to do</h1>
                </div>
             </div>
             <div className="nearbyAttraction">
                <img src={image6} alt=""className="nearbyIMG2"/>
                <div className="nearbyTitle2">
                    <h1>Hoi An</h1>
                    <h1>338 things to do</h1>
                </div>

        </div>
        </div>
        </div>
    )
}
export default Nearby
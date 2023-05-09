import "./attractionList.css"
import image1 from "./1.jpg"
import image2 from "./2.jpg"
import image3 from "./3.jpg"
import image4 from "./4.jpg"
import image5 from "./5.jpg"
import image6 from "./6.jpg"
import image7 from "./7.jpg"
import image8 from "./8.jpg"
const AttractionList =()=>{
    return(
        <div className="alistclass">
        <div className="alist">
        <div className="alistItem">
            <img src={image1} alt="" className="alistImg" />
            <div className="alistTitle">
                <h1>London</h1>
                <h1>704 things to do</h1>
            </div>
        </div>
        <div className="alistItem">
            <img src={image2} alt="" className="alistImg" />
            <div className="alistTitle">
                <h1>Istanbul</h1>
                <h1>225 things to do</h1>
            </div>
        </div>
        <div className="alistItem">
            <img src={image3} alt="" className="alistImg" />
            <div className="alistTitle">
                <h1>Paris</h1>
                <h1>679 things to do</h1>
            </div>
        </div>
        <div className="alistItem">
            <img src={image4} alt="" className="alistImg" />
            <div className="alistTitle">
                <h1>Hamburg</h1>
                <h1>175 things to do</h1>
            </div>
        </div>
        <div className="alist2">
        <div className="alistItem2">
            <img src={image5} alt="" className="alistImg2" />
            <div className="alistTitle2">
                <h1>Amsterdam</h1>
                <h1>372 things to do</h1>
            </div>
        </div>
        <div className="alistItem2">
            <img src={image6} alt="" className="alistImg2" />
            <div className="alistTitle2">
                <h1>Lisbon</h1>
                <h1>477 things to do</h1>
            </div>
        </div>
        <div className="alistItem2">
            <img src={image7} alt="" className="alistImg2" />
            <div className="alistTitle2">
                <h1>Rome</h1>
                <h1>987 things to do</h1>
            </div>
        </div>
        <div className="alistItem2">
            <img src={image8} alt="" className="alistImg2" />
            <div className="alistTitle2">
                <h1>Athens</h1>
                <h1>299 things to do</h1>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default AttractionList
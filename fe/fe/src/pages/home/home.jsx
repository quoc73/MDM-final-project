import Navbar from "../../component/navbar/Navbar"
import Header from "../../component/header/header"
import Nearby from "../../component/nearby/nearby"
import "./home.css"
import AttractionList from "../../component/attractionList/attractionList"
import Footer from "../../component/footer/footer"
const Home = ()=>{
    return (
        <div><Navbar />
        <Header/>
        <div className="homeContainer">
            <Nearby/>
            <h1 className="homeTitle">Explore more
             destinations</h1>
            <p className="homeTitleDes">Find things 
            to do in cities around the world</p>
            <AttractionList/>
            <Footer/>
        </div>
        </div>
    )
}
export default Home
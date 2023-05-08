import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faCar, faHotel, faMapLocationDot, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons'
import "./header.css"


const Header = () =>{
    return <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem ">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stay</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flight</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faHotel} />
                    <span>Flight + Hotel</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faMapLocationDot} />
                    <span>Attraction</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
        <div className="searchAttraction">
                <h1 className="headerTitle">
                What do you want to see and do?
                </h1>
                <p className="headerDescription">
                Discover new attractions and experiences to match your interests and travel style
                </p>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faMapLocationDot} />
                    <input type="text" placeholder='Where are you going?' className='headerSearchInput'/>
                    </div>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendar} />
                    <input type="text" placeholder='Where are you going?' className='headerSearchInput'/>
                    </div>
                </div>
        </div>
        </div>
}

export default Header
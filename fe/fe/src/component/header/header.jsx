import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faCar, faHotel, faMapLocationDot, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons'
import "./header.css"
import { DateRange} from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format}from "date-fns"
import {useNavigate} from "react-router-dom"
const Header = ({type}) =>{
    const handleSearch =()=>{
        navigate("/attractions",{state:{destination,date}});
    }
    const [destination,setdestination]=useState("")
    const navigate=useNavigate()
    const [openDate,setOpenDate]=useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
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
        {type !=="list" &&
            <div className="searchAttraction">
                <h1 className="headerTitle">
                What do you want to see and do?                              
                </h1>
                <p className="headerDescription">
                Discover new attractions and experiences to match your interests and travel style
                </p>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faMapLocationDot } className='headerIcon' />
                    <input type="text" 
                    placeholder='Where are you going?' 
                    className=''
                    onChange={e=>setdestination(e.target.value)}/>
                    </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendar} className='headerIcon2'/>
                    <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
                    {openDate && <DateRange 
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date} className="calendar"
                        minDate={new Date()}
                        />}
                    </div>

            </div>
            </div>
} 
            </div>
            {type !=="list" && 
            <div className="headerSearchItem">
                    <button className="headerbtn" onClick={handleSearch}>Search</button>
                    </div>} 
            </div>
            

}

export default Header
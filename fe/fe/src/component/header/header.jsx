import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faCar, faHotel, faMapLocationDot, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons'
import "./header.css"
import { DateRange} from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format}from "date-fns"
const Header = () =>{
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
                    <input type="text" placeholder='Where are you going?' className=''/>
                    </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendar} className='headerIcon'/>
                    <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
                    {openDate && <DateRange 
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date} className="calendar"
                        />}
                    </div>
                    <div className="headerSearchItem">
                    <button className="headerbtn">Search</button>
                    </div>
            </div>
            </div> 
            </div> 
            </div>
            

}

export default Header
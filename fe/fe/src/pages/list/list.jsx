import React, { useState } from 'react'
import Header from '../../component/header/header'
import Navbar from '../../component/navbar/Navbar'
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "./list.css";
import SearchItem from '../../component/searchItems/searchItems';
const List =()=>{
    const location =useLocation();
    const [openDate, setOpenDate] = useState(false);
    const [date,setdate]= useState(location.state.date)
    const [destination, setDestination] = useState(location.state.destination)
    return(
        <div>
            <Navbar/>
            <Header type="list"/> 
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <div className="1stItem">
                        <input placeholder={destination} type="Where are you going?" />
                    </div>
                    <div className="2ndItem">
                    <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setdate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />)}
                    </div>
                    <button>Search</button>
                    </div>
                    <div className="listResult">
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    </div>
                </div>
            </div>

            </div>
    )
}
export default List
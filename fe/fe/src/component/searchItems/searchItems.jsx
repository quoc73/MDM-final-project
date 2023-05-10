import "./searchItems.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://i1-dulich.vnecdn.net/2022/06/01/tau-hoa-6702-1654080409.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=Z2dWHXtZM65SsPgFiyiHEQ"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Full-day Ba Na Hill Trip with Lunch</h1>
        <span className="siDistance">A trip to explore Ba Na Hills with a professional guide</span>
        <span className="siTaxiOp">Free airport taxi</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
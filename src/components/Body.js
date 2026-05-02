import RestraurantCard from "./RestraurantCard";
import data from "../utility/dummyData.json"
import { useState } from "react";

const Body = () =>
{

    var [listOfRestaurant, useListOfRestaurant] = useState(data.data.cards);

    const onTopRatedBtnClick = () =>{    
        const filteredRes = listOfRestaurant.filter(res=>res.card.card.info.avgRating > 4.3);
        useListOfRestaurant(filteredRes);
    };

    const onClearFilterBtnClick = () =>{
        useListOfRestaurant(data.data.cards);
    };

    return(
        <div className="body-container">
            <div className="search-container">
                <input type="text" className="search" placeholder="Search"/>
                <button onClick={onTopRatedBtnClick} className="btn">Top Rated Restaurants</button>
                <button onClick={onClearFilterBtnClick} className="btn">Clear Filter</button>
             </div>
            <div className="cards-container">
                {
                    listOfRestaurant.map((rest)=>(<RestraurantCard key={rest.card.card.info.id} restObj={rest}/>))
                }
            </div>
        </div>
    );    
}

export default Body;
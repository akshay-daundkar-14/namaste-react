import RestraurantCard from "./RestraurantCard";
import data from "../utility/dummyData.json"
import { useState, useEffect } from "react";
import { SWIGGY_API_ENDPOINT_URL } from "../utility/constants";
import Shimmer from "./Shimmer";

const Body = () =>
{
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    useEffect(()=>{
        fetchRestaurantData();
    },[]);


    const fetchRestaurantData = async ()=>{
        const rawData = await fetch(SWIGGY_API_ENDPOINT_URL);
        const fetchedData = await rawData.json();
        setListOfRestaurant(fetchedData.data.cards);
        setFilteredListOfRestaurant(fetchedData.data.cards);
    };
    
    const onTopRatedBtnClick = () =>{    
        const filteredRes = listOfRestaurant.filter(res=>res?.card?.card?.info?.avgRating > 4.3);
        setFilteredListOfRestaurant(filteredRes);
    };

    const onClearFilterBtnClick = () =>{
        setFilteredListOfRestaurant(listOfRestaurant);
    };

    const searchOnChange = (e)=>{
        let searchValue = e.target.value.toLowerCase();
        setSearchItem(searchValue);
        fn_FilterOnSearch(searchItem);
    }

    const fn_FilterOnSearch = (restaurantName)=>{
        let filteredOnSearch = listOfRestaurant.filter(rest => rest?.card?.card?.info?.name.toLowerCase().includes(restaurantName));
        setFilteredListOfRestaurant(filteredOnSearch);
    }

    return listOfRestaurant.length === 0 ? (<Shimmer/>) : (
        <div className="body-container">
            <div className="search-container">

                <input type="text" className="search" value={searchItem} onChange={searchOnChange} placeholder="Search"/>

                <button onClick={onTopRatedBtnClick} className="btn">Top Rated Restaurants</button>

                <button onClick={onClearFilterBtnClick} className="btn">Clear Filter</button>

             </div>
            <div className="cards-container">
                {
                    filteredListOfRestaurant.map((rest)=>
                    {
                        if(rest.card.card.info != null)
                        {
                            return(<RestraurantCard key={rest?.card?.card?.info?.id} restObj={rest}/>)
                        }
                    })                   
                }
            </div>
        </div>
    );    
}

export default Body;
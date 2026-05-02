import RestraurantCard from "./RestraurantCard";
import data from "../utility/dummyData.json"

const Body = () =>
{
    const restObjs = data.data.cards;

    return(
        <div className="body-container">
            <div className="search-container">
                <input type="text" className="search" placeholder="Search"/>
             </div>
            <div className="cards-container">
                {
                    restObjs.map((rest)=>(<RestraurantCard key={rest.card.card.info.id} restObj={rest}/>))
                }
            </div>
        </div>
    );
}


export default Body;
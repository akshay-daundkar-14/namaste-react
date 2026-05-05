import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import useMenuCard from "../utility/useMenuCard";


const MenuCard = () => {
   
    const {resId} = useParams();

    const menuItems = useMenuCard(resId);
    console.log("MenuItems", menuItems);

    if(menuItems === null)
    {
        return(
            <Shimmer/>
        );
    }

    const {city,avgRating,costForTwoMessage,cuisines,name,sla,totalRatings,feeDetails} = menuItems;

    return (
        <div className="menu-container">
            <div className="menu-hero">
                <div className="menu-badge">Now Open</div>
                <h1 className="menu-restaurant-name">{name}</h1>
                <p className="menu-city">📍 {city}</p>
            </div>

            <div className="menu-stats">
                <div className="menu-stat-item">
                    <span className="menu-stat-icon">⭐</span>
                    <span className="menu-stat-value menu-rating">{avgRating}</span>
                    <span className="menu-stat-label">Rating</span>
                </div>
                <div className="menu-stat-divider"></div>
                <div className="menu-stat-item">
                    <span className="menu-stat-icon">🗳️</span>
                    <span className="menu-stat-value">{totalRatings}</span>
                    <span className="menu-stat-label">Reviews</span>
                </div>
                <div className="menu-stat-divider"></div>
                <div className="menu-stat-item">
                    <span className="menu-stat-icon">🕐</span>
                    <span className="menu-stat-value">{sla.deliveryTime} Minutes</span>
                    <span className="menu-stat-label">Delivery</span>
                </div>
                <div className="menu-stat-divider"></div>
                <div className="menu-stat-item">
                    <span className="menu-stat-icon">💰</span>
                    <span className="menu-stat-value">{costForTwoMessage}</span>
                    <span className="menu-stat-label">For Two</span>
                </div>
            </div>

            <div className="menu-cuisines">
                <h3 className="menu-cuisines-title">Cuisines</h3>
                <ul className="menu-cuisine-list">
                    {cuisines.map(item=>(<li key={item} className="menu-cuisine-item">{item}</li>))}
                </ul>
            </div>
        </div>
    );
};

export default MenuCard;
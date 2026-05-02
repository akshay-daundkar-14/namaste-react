import { RESTRAURANT_IMAGE_URL } from "../utility/constants";

const RestraurantCard = (props) =>
{
    const {avgRating,name,cuisines,cloudinaryImageId} = props?.restObj?.card.card.info;   
    
    return(
        <div className="card-container">
            <div className="card-image">
                <img className="card-img" src={RESTRAURANT_IMAGE_URL + cloudinaryImageId}/>
            </div>
            <div className="card-details">
                <h2 className="card-heading">{name}</h2>
                <h4 className="card-rating">{avgRating} Stars</h4>
                <h6 className="card-tags">{cuisines.join(", ")}</h6>
            </div>

        </div>
    );

}

export default RestraurantCard;
const Card = (props) => {

    const {Inner_data} = props;
    const{name,cuisines,avgRating,deliveryTime,cloudinaryImageId} = Inner_data.data;
    return(
        <div className='card'>
            <div className="card__image">
                <img className="res__image"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="cardImage" />
            </div>
            <div className='card__title'>{name}</div>
            <div className="card__description">{cuisines}</div>
            <div className="card__deatils">
                <div className='card__common card__ratings'>{avgRating}</div>
                <div className="card__common card__time">{deliveryTime} Minutes</div>
            </div>  
        </div>
    )
}
export default Card;
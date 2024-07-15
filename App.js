import React from 'react';
import ReactDOM from 'react-dom';

const Header = ()=>{
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src="" alt='company-logo'></img>
            </div>
            <div className='nav-items-container'>
                <ol className='nav-items'>
                    <li className='items'>Home</li>
                    <li className='items'>About</li>
                    <li className='items'>cart</li>
                </ol>
            </div>
        </div>
    )
}

const Card = (props) => {

    const {data} = props;

    return(
        <div className='card'>
            <div className="card__image">
                <img src="" alt="cardImage" />
            </div>
            <div className='card__title'>{data.name}</div>
            <div className="card__description">{data.cuisine}</div>
            <div className="card__deatils">
                <div className='card__common card__ratings'>{data.rating}</div>
                <div className="card__common card__time">{data.Avgtime} Minutes</div>
            </div>  
        </div>
    )
}

const restaurantObj = [
    {
        name:"Dominos" ,
        cuisine:"We deliver best pizza",
        rating:'4.5',
        Avgtime:'30-40',
    },
    {
        name:"KFC" ,
        cuisine:"Chicked Basket" ,
        rating:'4.7',
        Avgtime:'20-30',
    },
    {
        name:"Pizza Hut",
        cuisine:"Best Pan Pizzas",
        rating:'4.2', 
        Avgtime:'30-40',
    }
]
const Body = () =>{
    return (
        <div className='body'>
            <div className="search">Search</div>
            <div className="card__container">
                {
                    restaurantObj.map((res) => <Card data={res}/>)
                }
            </div>
        </div>
    )
}
const App = () =>{
    return(
        <div>
            <Header/>
            <Body/>
            {/* <Footer/> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

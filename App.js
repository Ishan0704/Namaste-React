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
    return(
        <div className='card'>
            <div className="card__image">
                <img src="" alt="cardImage" />
            </div>
            <div className='card__title'>{props.title}</div>
            <div className="card__description">{props.descrption}</div>
            <div className="card__deatils">
                <div className='card__common card__ratings'>{props.ratings}</div>
                <div className="card__common card__time">{props.time} Minutes</div>
            </div>  
            

        </div>
    )
}

const Body = () =>{
    return (
        <div className='body'>
            <div className="search">Search</div>
            <div className="card__container">
                <Card title="Dominos" descrption="We deliver best pizza" ratings='4.5' time='30-40'/>
                <Card title="KFC" descrption="Chicked Basket" ratings='4.7' time='20-30'/>
                <Card title="Pizza Hut" descrption="Best Pan Pizzas" ratings='4.2' time='30-40'/>
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

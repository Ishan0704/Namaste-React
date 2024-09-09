import './body.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { restaurantList } from '../../assets/RestData';
import Card from '../Card';
import { useEffect } from 'react';



const Body = () =>{

    const [List, setlist]=useState(restaurantList);

    useEffect(  
        ()=>{
            datafunction()
        },[]
    )

    const datafunction=async()=>{
       const orgData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await orgData.json();
       console.log(json);
       
    }

    return (
        <div className='body'>
            <div className="search">Search</div>
            <div className="card__container">
                {
                    List.map((res) => <Card key={res.data.id} Inner_data={res}/>)
                }
            </div>
        </div>
    )
}

export default Body;
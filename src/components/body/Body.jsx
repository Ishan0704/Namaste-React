import './body.css';
import { restaurantList } from '../../assets/RestData';
import Card from '../Card';

const Body = () =>{
    return (
        <div className='body'>
            <div className="search">Search</div>
            <div className="card__container">
                {
                    restaurantList.map((res) => <Card key={res.data.id} Inner_data={res}/>)
                }
            </div>
        </div>
    )
}

export default Body;
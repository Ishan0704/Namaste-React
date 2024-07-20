import './header.css';
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
export default Header;
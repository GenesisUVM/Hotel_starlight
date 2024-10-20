import './NavBar.css'
import logo from '../img/logo.png'

function NavBar(){
    return(
        <nav className="bar">
            <img src={logo} className="logoimg" alt="logo del hotel"></img>
            <h2 className="titulo"> Hotel Starlight</h2>
        </nav>

    )
};


export default NavBar
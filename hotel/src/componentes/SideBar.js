import './SideBar.css'

function SideBar(){
    return(
        <div className="sideBarContainer">
            <ul>
                <li><a>Informacion Relevante </a></li>
                <li><a>Block</a></li>
                <li><a>Guias Turisticas</a></li>
                <li><a>Reseñas</a></li>
                <li><a>Reservas</a></li>
            </ul>
        </div>
    )
}

export default SideBar;
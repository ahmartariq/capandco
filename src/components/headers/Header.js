import React ,{ useState} from "react";
import Bars from './icon/bars.svg';
import Close from './icon/close.svg';
import { Link } from "react-router-dom";
import Logo from './icon/logo.webp'

function Header() {

    const [menu, setMenu] = useState(false)

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
  return (
    <header>
        <div className='menu' onClick={() => setMenu(!menu)}>
            <img src={Bars} alt="" width={30} className="menu"/>
        </div>
        <div className="logo">
        <img src={Logo} alt="" width={'8%'} height={'8%'}/>
            <h1>
                <Link  style={{color : '#292929'}} to="/">CAP&Co.</Link>
            </h1>
        </div>

        <ul style={styleMenu}>
            <li onClick={() => setMenu(!menu)}><Link to="/">Home</Link></li>
            <li onClick={() => setMenu(!menu)}><Link to="/services-and-pricing" className="gold">Services and Prices</Link></li>
            <li onClick={() => setMenu(!menu)}><Link to="/contact-us">Contact Us</Link></li>

            <li onClick={() => setMenu(!menu)}>
                <img src={Close} alt="" width={30} className="menu"/>
            </li>
        </ul>    
    </header>
  );
}

export default Header;

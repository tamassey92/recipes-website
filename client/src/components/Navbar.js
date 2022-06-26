import React, {useState} from 'react';

const Navbar = ({setIsAuthenticated, setUser }) => {

    const [navLinkOpen, navLinkToggle] = useState(false);
    
    const handleNavLinksToggle = () => {
        navLinkToggle(!navLinkOpen);
    };

    const renderClasses = () => {
        let classes = "navlinks"

        if(navLinkOpen) {
            classes += " active"
        }

        return classes
    }

    const logout = () => {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
    }

    return <nav>
        <div className="logo">
            <i className="fa-solid fa-utensils"></i>
            <h4>Recipes</h4>
        </div>
        <ul className={renderClasses()}>
            <li className="link"><a href="#">Home</a></li>
            <li className="link"><a href="#">Categories</a></li>
            <li className="link"><a href="#">Add a Recipe</a></li>
            <li className="link"><a href="#">Search</a></li>
            <li className="link"><button onClick={logout}>Logout</button></li>
        </ul>
        <div onClick={handleNavLinksToggle} className='hamburger-toggle'>
            <i className='fas fa-bars fa-lg'></i>

        </div>
    </nav>
};

export default Navbar;
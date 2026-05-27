import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav aria-label="Main Navigation">
            <ul>
                <li><Link to="/" aria-label="Go to Home">Home</Link></li>
                <li><Link to="/#about" aria-label="Go to About">About</Link></li>
                <li><Link to="/menu" aria-label="Go to Menu">Menu</Link></li>
                <li><Link to="/booking" aria-label="Go to Reservations">Reservations</Link></li>
                <li><Link to="/order-online" aria-label="Go to Order Online">Order Online</Link></li>
                <li><Link to="/login" aria-label="Go to Login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
import { Link } from 'react-router-dom';

import footerLogo from '../assets/footer-logo.jpg';

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa';

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-top">

                {/* Logo */}

                <div className="footer-column footer-logo-column">

                    <img
                        src={footerLogo}
                        alt="Little Lemon Logo"
                        className="footer-logo"
                    />

                </div>

                {/* Navigation */}

                <div className="footer-column">

                    <h3>Navigation</h3>

                    <ul className="footer-nav">

                        <li>

    <Link
        to="/"
        onClick={() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }}
    >
        Home
    </Link>

</li>

                        <li><Link to="/#about">About</Link></li>

                        <li><Link to="/menu">Menu</Link></li>

                        <li><Link to="/booking">Reservations</Link></li>

                        <li><Link to="/order-online">Order Online</Link></li>

                    </ul>

                </div>

                {/* Contact */}

                <div className="footer-column">

                    <h3>Contact</h3>
                    <h4>Address</h4>
                    <p>
                        123 Mediterranean Avenue,
                        Chicago, Illinois 60601
                    </p>
                    <h4>Phone</h4>
                    <p>
                        +1 (312) 555-0147
                    </p>
                    <h4>Email</h4>
                    <p>
                        contactus@littlelemon.com
                    </p>

                </div>

                {/* Contact Form */}

                <div className="footer-column">

                    <h3>Write Us</h3>

                    <p>
                        Tell us your ideas, proposals,
                        or feedback.
                    </p>

                    <form className="footer-form">

                        <textarea
                            placeholder="Write your message here..."
                            rows="5"
                        />

                        <button type="submit">

                            Send Message

                        </button>

                    </form>

                </div>

            </div>

            {/* Bottom */}

            <div className="footer-bottom">

                <div className="social-icons">

                    <a href="/">
                        <FaFacebook />
                    </a>

                    <a href="/">
                        <FaInstagram />
                    </a>

                    <a href="/">
                        <FaTwitter />
                    </a>

                    <a href="/">
                        <FaYoutube />
                    </a>

                </div>

                <p>
                    © 2026 Little Lemon.
                    All rights reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;
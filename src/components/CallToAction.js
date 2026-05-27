import { Link } from 'react-router-dom';

import heroImage from '../assets/hero-image.jpg';

function CallToAction() {

    return (

        <section className="hero">

            <div className="hero-text">

                <h1>Little Lemon</h1>

                <h2>Chicago</h2>

                <p>
                    Experience authentic Mediterranean flavors in the heart
                    of Chicago. Reserve your table today and enjoy fresh
                    ingredients, handcrafted dishes, and a warm dining
                    atmosphere at Little Lemon.
                </p>

                <Link to="/booking">

                    <button aria-label="Reserve a table at Little Lemon">

                        Reserve a Table

                    </button>

                </Link>

            </div>

            <div className="hero-image-container">

                <img
                    src={heroImage}
                    alt="Little Lemon Mediterranean food"
                    className="hero-image"
                />

            </div>

        </section>

    );
}

export default CallToAction;
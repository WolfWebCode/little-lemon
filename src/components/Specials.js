import { Link } from 'react-router-dom';

import greekSalad from '../assets/greek-salad.jpg';
import bruschetta from '../assets/bruschetta.svg';
import lemonDessert from '../assets/lemon-dessert.jpg';
import deliveryBike from '../assets/delivery-bike.jpg';

function Specials() {

    const specials = [

        {
            title: 'Greek Salad',
            price: '$12.99',
            description:
                'Fresh lettuce, tomatoes, cucumbers, olives, and feta cheese served with our signature Mediterranean dressing.',
            image: greekSalad,
        },

        {
            title: 'Bruschetta',
            price: '$8.99',
            description:
                'Grilled bread topped with garlic, tomatoes, olive oil, and fresh herbs for a classic Italian starter.',
            image: bruschetta,
        },

        {
            title: 'Lemon Dessert',
            price: '$6.99',
            description:
                'A homemade lemon cake with a light citrus flavor and creamy texture that melts in your mouth.',
            image: lemonDessert,
        },
    ];

    return (

        <section className="specials-section">

            <div className="specials-header">

                <h2>This Week’s Specials!</h2>

            </div>

            <div className="specials-cards">

                {specials.map((item, index) => (

                    <article
                        className="special-card"
                        key={index}
                    >

                        <img
                            src={item.image}
                            alt={item.title}
                            className="special-image"
                        />

                        <div className="special-content">

                            <div className="special-title-row">

                                <h3>{item.title}</h3>

                                <span>{item.price}</span>

                            </div>

                            <p>{item.description}</p>

                            <Link
                                to="/order-online"
                                className="order-button"
                                aria-label={`Order ${item.title} online`}>
                            <img
                                src={deliveryBike}
                                alt="Delivery Icon"
                                className="delivery-icon"
                            />
                            <span>Order now</span>
                            </Link>

                        </div>

                    </article>

                ))}

            </div>

        </section>

    );
}

export default Specials;
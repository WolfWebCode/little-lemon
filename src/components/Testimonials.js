import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';
import profile4 from '../assets/profile4.jpg';

function Testimonials() {

    const testimonials = [
        {
            name: "Sophia",
            image: profile1,
            review:
                "Amazing Mediterranean flavors and excellent service. The atmosphere feels warm and authentic.",
        },
        {
            name: "Daniel",
            image: profile2,
            review:
                "Best restaurant experience in Chicago. The Greek salad and bruschetta are incredible.",
        },
        {
            name: "Emma",
            image: profile3,
            review:
                "Everything tasted fresh and homemade. Highly recommended for family dinners.",
        },
        {
            name: "Michael",
            image: profile4,
            review:
                "Friendly staff, beautiful presentation and delicious desserts. Definitely coming back.",
        },
    ];

    return (
        <section className="testimonials-section">

            <h2 className="testimonials-title">
                Testimonials
            </h2>

            <div className="testimonials-container">

                {testimonials.map((testimonial, index) => (

                    <article
                        className="testimonial-card"
                        key={index}
                    >

                        <div className="testimonial-header">

                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="testimonial-image"
                            />

                            <div className="testimonial-user-info">

                                <h3>{testimonial.name}</h3>

                                <div className="testimonial-stars">
                                    ★★★★★
                                </div>

                            </div>

                        </div>

                        <h4 className="review-title">
                            Review
                        </h4>

                        <p className="testimonial-review">
                            {testimonial.review}
                        </p>

                    </article>
                ))}

            </div>

        </section>
    );
}

export default Testimonials;
import foundersImage from '../assets/founders.jpg';

function About() {

    return (

        <section
            className="about-section"
            id="about"
        >

            <div className="about-text">

                <h2>About Little Lemon</h2>

                <p>
                    Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant focused on traditional recipes with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish cuisine and offer a 12-15 course menu that rotates seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular spot for a meal at any time of day.
                </p>

                <p>
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. Mario draws on family recipes and his experience as a chef in Italy to create the menu. Adrian handles all of the restaurant's marketing and spearheaded the effort to expand the menu beyond classic Italian to incorporate other cuisines from the Mediterranean region.
                </p>

            </div>

            <div className="about-image-container">

                <img
                    src={foundersImage}
                    alt="Mario and Adrian"
                    className="about-image"
                />

            </div>

        </section>
    );
}

export default About;
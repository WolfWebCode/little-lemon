import BookingForm from "../components/BookingForm";

function BookingPage() {
    return (
        <section className="booking-page">
            <h1>Book a Table</h1>
            <p>Here you can make a reservation at Little Lemon.</p>
            <BookingForm />
        </section>
    );
}

export default BookingPage;
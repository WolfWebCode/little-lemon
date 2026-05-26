import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch }) {
    return (
        <section className="booking-page">
            <h1>Book a Table</h1>
            <p>Here you can make a reservation at Little Lemon.</p>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </section>
    );
}

export default BookingPage;
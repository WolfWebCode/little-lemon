import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {

    return (
        <section>

            <h1>Table Reservation</h1>

            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />

        </section>
    );
}

export default BookingPage;
import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = (updatedDate, updatedGuests) => {

        const isDateValid = updatedDate !== '';

        const isGuestsValid =
            updatedGuests >= 1 &&
            updatedGuests <= 10;

        setIsFormValid(
            isDateValid && isGuestsValid
        );
    };

    const handleDateChange = (e) => {

        const newDate = e.target.value;

        setDate(newDate);

        dispatch({
            type: 'UPDATE_TIMES',
            date: newDate,
        });

        validateForm(newDate, guests);
    };

    const handleGuestsChange = (e) => {

        const newGuests = Number(e.target.value);

        setGuests(newGuests);

        validateForm(date, newGuests);
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!isFormValid) return;

        submitForm({
            date,
            time,
            guests,
            occasion,
        });
    };

    return (

        <form
            onSubmit={handleSubmit}
            className="booking-form"
        >

            <label htmlFor="res-date">
                Choose date
            </label>

            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                required
            />

            <label htmlFor="res-time">
                Choose time
            </label>

            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            >

                {availableTimes.map((availableTime) => (

                    <option
                        key={availableTime}
                        value={availableTime}
                    >
                        {availableTime}
                    </option>

                ))}

            </select>

            <label htmlFor="guests">
                Number of guests
            </label>

            <input
                type="number"
                id="guests"
                min="1"
                max="10"
                value={guests}
                onChange={handleGuestsChange}
                required
            />

            <label htmlFor="occasion">
                Occasion
            </label>

            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
            >

                <option>Birthday</option>
                <option>Anniversary</option>

            </select>

            <input
                type="submit"
                value="Make Your reservation"
                disabled={!isFormValid}
            />

        </form>
    );
}

export default BookingForm;
/* global fetchAPI */
/* global submitAPI */

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';

export const initializeTimes = () => {

    const today = new Date();

    return fetchAPI(today);
};

export const updateTimes = (state, action) => {

    if (action.type === 'UPDATE_TIMES') {

        const selectedDate = new Date(action.date);

        return fetchAPI(selectedDate);
    }

    return state;
};

function Main() {

    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    const navigate = useNavigate();

    const submitForm = (formData) => {

        const success = submitAPI(formData);

        if (success) {
            navigate('/confirmed');
        }
    };

    return (
        <main>

            <Routes>

                <Route
                    path="/"
                    element={<HomePage />}
                />

                <Route
                    path="/booking"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                />

                <Route
                    path="/confirmed"
                    element={<ConfirmedBooking />}
                />

            </Routes>

        </main>
    );
}

export default Main;
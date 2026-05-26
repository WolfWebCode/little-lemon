/* global fetchAPI */

import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';

import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';

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
                        />
                    }
                />
            </Routes>
        </main>
    );
}

export default Main;
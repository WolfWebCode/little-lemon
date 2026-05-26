import { Routes, Route } from 'react-router-dom';

import { useReducer } from 'react';

import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';

const initialTimes = () => {
    return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ];
};

const updateTimes = (state, action) => {

    console.log(action.date);

    return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];
};

function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initialTimes);

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={
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
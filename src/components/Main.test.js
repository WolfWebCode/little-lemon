import { initializeTimes, updateTimes } from "./Main";

beforeEach(() => {

    global.fetchAPI = jest.fn(() => [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]);

});

test("initializeTimes returns available times", () => {

    const result = initializeTimes();

    expect(result).toHaveLength(6);

});

test("updateTimes returns available times based on selected date", () => {

    const state = [];

    const action = {
        type: "UPDATE_TIMES",
        date: "2026-05-25",
    };

    const result = updateTimes(state, action);

    expect(result).toHaveLength(6);

});
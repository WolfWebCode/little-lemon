import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns the correct initial times', () => {

  const result = initializeTimes();

  expect(result).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

});

test('updateTimes returns the same state provided', () => {

  const state = [
    '17:00',
    '18:00',
    '19:00',
  ];

  const action = {
    type: 'UPDATE_TIMES',
    date: '2026-05-25',
  };

  const result = updateTimes(state, action);

  expect(result).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

});
export const increment = (val) => ({
    type: 'INCREMENT',
    payload: val
  });
  
  export const decrement = (val) => ({
    type: 'DECREMENT',
    payload: val
  });
  export const test = (val) => ({
    type: 'TEST',
    payload: val
  });

export const SET_DUMMY_CREDENTIALS = 'SET_DUMMY_CREDENTIALS';

export const setDummyCredentials = (email, password) => ({
  type: SET_DUMMY_CREDENTIALS,
  payload: { email, password }
});

export const addOne = () => ({
  type: 'ADD_ONE',
});
export const minusOne = () => ({
  type: 'MINUS_ONE',
});
export const addFive = () => ({
  type: 'ADD_FIVE',
  payload: 5,
});
export const addAnyNumber = number => {
  return {
    type: 'ADD_ANY',
    payload: number,
  };
};

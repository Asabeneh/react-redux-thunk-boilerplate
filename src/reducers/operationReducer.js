export default (state = 0, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1;
    case 'MINUS_ONE':
      return state - 1;
    case 'ADD_FIVE':
      return state + action.payload;
    case 'ADD_ANY':
      return typeof action.payload !== 'number'
        ? state
        : state + action.payload;

    default:
      return state;
  }
};

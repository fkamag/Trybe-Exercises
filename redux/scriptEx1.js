const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT':
      console.log(state.index);
      return {
        ...state,
        index: state.index === state.colors.length-1 ? 0 : state.index += 1
      }
    case 'PREV':
      console.log(state.index);
      return {
        ...state,
        index: state.index === 0 ? state.colors.length-1 : state.index -= 1
      }
      break;
    default:
      return state
  }
}

const store = Redux.createStore(reducer);

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');

nextButton.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT' });
})
prevButton.addEventListener('click', () => {
  store.dispatch({ type: 'PREV' });
})
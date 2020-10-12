export default (state = {}, action) => {
  switch (action.type) {
    case 'PLAY':
      return 'play';
    default:
      return state;
  }
}
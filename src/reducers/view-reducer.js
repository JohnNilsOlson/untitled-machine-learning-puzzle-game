export default (state = {}, action) => {
  switch (action.type) {
    case 'PLAY':
      return 'play';
    case 'LEARN':
      return 'learn';
    case 'DATA':
      return 'data';
    default:
      return state;
  }
}
import ActionType from '../action/actionType';

const initState = {
  isLoading: false,
  isLogIn: false
};

const commonReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.SHOW_LOADING_ANIMATION:
      return Object.assign({}, state, { isLoading: true });
    case ActionType.HIDE_LOADING_ANIMATION:
      return Object.assign({}, state, { isLoading: false });
    case ActionType.LOGIN_SUCCESSFULL:
      return Object.assign({}, state, { isLogIn: true });
    case ActionType.LOGIN_FALIED:
      return Object.assign({}, state, { isLogIn: false });
    default:
      return state;
  }
};

export default commonReducer;

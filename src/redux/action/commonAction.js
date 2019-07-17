import ActionTypes from './actionType';

export const showLoading = () => {
  return {
    type: ActionTypes.SHOW_LOADING_ANIMATION
  };
};

export const hideLoading = () => {
  return {
    type: ActionTypes.HIDE_LOADING_ANIMATION
  };
};

export function isLogInSuccessfull() {
  return {
    type: ActionTypes.LOGIN_SUCCESSFULL
  };
}

export const isLogInfail = () => {
  return {
    type: ActionTypes.LOGIN_FALIED
  };
};

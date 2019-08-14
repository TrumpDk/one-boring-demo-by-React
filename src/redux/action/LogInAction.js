import ActionTypes from '../action/actionType';

export const LogInStart = (mobile, password, Toast) => ({
  type: ActionTypes.LOGIN_START,
  param: { mobile, password, Toast }
});

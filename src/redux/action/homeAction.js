import ActionTypes from './actionType';

export const setDataForHomepage = param => {
  return {
    type: ActionTypes.FETCH_DATA_FOR_HOME_PAGE,
    param: param
  };
};

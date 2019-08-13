import ActionTypes from './actionType';
import HttpService from '../../http/httpList';

export const setDataForHomepage = () => {
  return {
    type: ActionTypes.FETCH_DATA_FOR_HOME_PAGE
  };
};

// export const fetchData = () => {
//   return async dispatch => {
//     const result = await HttpService.dataForHomePage();
//     dispatch(setDataForHomepage(result));
//   }
// }

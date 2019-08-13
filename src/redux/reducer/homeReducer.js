import ActionType from '../action/actionType';

const initState = {
  banner: [],
  newGoodsList: [],
  channel: [],
  hotGoodsList: [],
  brandList: [],
  topicList: [],
  categoryList: []
};

const fetchDataForHomePage = (state = initState, action) => {
  switch (action.type) {
    case ActionType.FETCH_DATA_FOR_HOME_PAGE_SUCCESSFUL:
      return { ...action.data };

    case ActionType.FETCH_DATA_FOR_HOME_PAGE_FAILED:
      return { ...state };
    default:
      return state;
  }
};

export default fetchDataForHomePage;

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
    case ActionType.FETCH_DATA_FOR_HOME_PAGE:
      console.log(action);
      return Object.assign({}, state, {
        banner: action.param.banner,
        newGoodsList: action.param.newGoodsList,
        channel: action.param.channel,
        hotGoodsList: action.param.hotGoodsList,
        brandList: action.param.brandList,
        topicList: action.param.topicList,
        categoryList: action.param.categoryList
      });
    default:
      return state;
  }
};

export default fetchDataForHomePage;

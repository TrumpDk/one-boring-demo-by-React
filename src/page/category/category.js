import React, { Component, Fragment } from 'react';
import GoodsList from '../../component/goodsList/goodsList';
import { withRouter } from 'react-router-dom';
import { Tabs } from 'antd-mobile';
import './category.scss';
import Header from '../../component/Header/Header';
import HttpService from '../../http/httpList';

class Categorys extends Component {
  // you can call super implicitly
  state = {
    page: 0,
    currentCategoryId: 0,
    brotherCategory: [],
    currentCategory: {},
    goodsList: []
  };

  goBack() {
    this.props.history.go(-1);
  }
  componentDidMount() {
    this.props.setAnimationState();
    this.setDataForThisComponenet();
  }

  async setDataForThisComponenet() {
    const {
      brotherCategory,
      currentCategory
    } = await HttpService.getCategoryNavData({
      id: this.props.match.params.id
    });
    const { goodsList } = await HttpService.getGoodsData({
      page: 1,
      size: 1000,
      categoryId: this.props.match.params.id
    });

    this.setState({
      brotherCategory: brotherCategory,
      currentCategory: currentCategory,
      goodsList: goodsList
    });
    this.props.setAnimationStateFalse();
  }

  async fetchNavData(id) {
    const { goodsList } = await HttpService.getGoodsData({
      page: 1,
      size: 1000,
      categoryId: id
    });
    this.setState({
      goodsList: goodsList
    });
  }

  async fetchGoodsData(id) {
    const {
      brotherCategory,
      currentCategory
    } = await HttpService.getCategoryNavData({ id: id });

    this.setState({
      brotherCategory: brotherCategory,
      currentCategory: currentCategory
    });
  }

  /*切换分类*/
  async clickTab({ id }, index) {
    if (this.state.currentCategoryId !== id) {
      this.setState({
        page: index,
        currentCategoryId: id
      });
      this.props.setAnimationState();
      // const { actions: { fetchNavData }, goodsAction: { fetchGoodsData } } = this.props;
      await this.fetchGoodsData(id);
      await this.fetchNavData(id);
      this.props.setAnimationStateFalse();
      window.scrollTo(0, 0);
    }
  }
  // componentWillReceiveProps(nextProps) {
  //     const { brotherCategory } = this.props
  //     brotherCategory.forEach((item, index) => {
  //         if (item.id === Number(this.state.currentCategoryId)) {
  //             this.setState({
  //                 page: index
  //             })
  //         }
  //     })
  // }
  render() {
    // const { brotherCategory, currentCategory, goodsList } = this.props
    // const { page, currentCategoryId } = this.state
    return (
      <Fragment>
        <Header
          clickLeft={this.goBack.bind(this, this.state.currentCategoryId)}
          title="奇趣分类"
        ></Header>
        <div className="tabWrap">
          <Tabs
            tabs={this.state.brotherCategory}
            page={this.state.page}
            onTabClick={(tab, index) => {
              this.clickTab(tab, index);
            }}
            renderTab={props => <div className="tabsItem">{props.name}</div>}
          />
        </div>
        <div className="categoryDetail">
          <div>{this.state.currentCategory.name}</div>
          <div>{this.state.currentCategory.front_name}</div>
        </div>
        <div className="goodsList">
          <GoodsList goodsList={this.state.goodsList}></GoodsList>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Categorys);

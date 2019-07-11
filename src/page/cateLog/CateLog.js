import React, { Fragment } from 'react';
import { Tabs } from 'antd-mobile';
import { withRouter, Link } from 'react-router-dom';
import HttpService from '../../http/httpList';
import './CateLog.scss';

class CateLog extends React.Component {
  state = {
    categoryList: [],
    currentCategory: {},
    page: 0,
    tabsHeight: 0,
    count: 0,
    tabIndex: 0
  };

  saveRef = ref => {
    this.refDom = ref;
  };

  componentDidMount() {
    this.props.setAnimationState();
    this.fechInitData();
  }

  async fechInitData() {
    const {
      categoryList,
      currentCategory
    } = await HttpService.getCatalogInitData();
    const { goodsCount } = await HttpService.getSellGoodsCount();
    this.setState({
      categoryList: categoryList,
      currentCategory: currentCategory,
      count: goodsCount
    });
    const { page, tabsHeight } = this.computedTabsProperty();
    this.setState({
      page: page,
      tabsHeight: tabsHeight
    });
    this.props.setAnimationStateFalse();
  }

  async clickTab({ id }, index) {
    this.props.setAnimationState();
    const { currentCategory } = await HttpService.getCatalogMsg({ id });
    this.props.setAnimationStateFalse();
    this.setState({
      currentCategory: currentCategory,
      tabIndex: index
    });
  }

  computedTabsProperty() {
    let page = 0;
    let tabsHeight = 0;
    if (this.state.categoryList.length > 0 && this.refDom) {
      const { clientHeight } = this.refDom;
      const tabLen = this.state.categoryList.length * 42;
      tabsHeight =
        tabLen < clientHeight
          ? this.state.categoryList.length * 42
          : clientHeight;
      page = Math.floor(clientHeight / 42);
    }
    return { page, tabsHeight };
  }

  render() {
    return (
      <Fragment>
        <div className="searchWrap">
          <Link className="searchInput" to={'/goodsSearch'}>
            <i className="fa fa-search"></i>
            <span>{`搜索商品，共${this.state.count}款好物`}</span>
          </Link>
        </div>
        <div id="tabsWrap" ref={this.saveRef}>
          <div style={{ height: this.state.tabsHeight + 'px' }}>
            <Tabs
              tabs={this.state.categoryList}
              tabBarUnderlineStyle={{ left: '0', right: '100%' }}
              onTabClick={this.clickTab.bind(this)}
              page={this.state.tabIndex}
              tabDirection="vertical"
              tabBarPosition="left"
              renderTabBar={props => (
                <Tabs.DefaultTabBar
                  {...props}
                  page={this.state.page}
                  renderTab={props => (
                    <div className="tabItem">{props.name}</div>
                  )}
                />
              )}
            />
          </div>
        </div>
        <div className="categogContet">
          <div
            className="categoryWrap"
            style={{
              backgroundImage: `url(${this.state.currentCategory.wap_banner_url})`
            }}
          >
            {this.state.currentCategory.front_name}
          </div>
          <div className="categoryTitle">
            <div></div>
            {this.state.currentCategory.name}分类<div></div>
          </div>
          <div className="subCategory">
            {'subCategoryList' in this.state.currentCategory
              ? this.state.currentCategory.subCategoryList.map(item => (
                  <Link
                    className="subCategoryItem"
                    to={`/categorys/${item.id}`}
                    key={item.id}
                  >
                    <img src={item.wap_banner_url} alt="load img failed" />
                    <div className="subCategoryItemName">{item.name}</div>
                  </Link>
                ))
              : null}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(CateLog);

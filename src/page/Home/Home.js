import React, { Fragment } from 'react';
import BrandList from '../../component/barndList/brandList';
import HttpService from '../../http/httpList';
import { Carousel } from 'antd-mobile';
import './Home.scss';
import { Link } from 'react-router-dom';
import moreImg from '../../assets/img/icon_go_more.png';

function Channel({ channel }) {
  if (channel) {
    return (
      <div className="channelWrap">
        {channel.map(item => (
          <Link
            className="channelItem"
            to={`/categorys/${item.id}`}
            key={item.id}
          >
            <img src={item.icon_url} alt="img load failed"></img>
            <div>{item.name}</div>
          </Link>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

const NewGoods = ({ newGoodsList }) => {
  if (newGoodsList) {
    return (
      <div className="newGoodsBox">
        <div className="newGoodsTitle">新品首发</div>
        <div className="newGoodsWrap">
          {newGoodsList.map(item => (
            <Link
              to={`/goods/${item.id}`}
              className="newGoodsItem"
              key={`list` + item.id}
            >
              <img src={item.list_pic_url} alt="load img falied"></img>
              <div className="newGoodsName">{item.name}</div>
              <div className="newGoodsPrice">￥{item.retail_price}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const HotGoods = ({ hotGoodsList }) => {
  return (
    <div className="hotGoodsBox">
      <div className="hotGoodsTitle">人气推荐</div>
      <div className="hotGoodsWrap">
        {hotGoodsList.map(item => (
          <Link to={`/goods/${item.id}`} className="hotGoodsItem" key={item.id}>
            <img src={item.list_pic_url} alt="img load failed"></img>
            <div className="hotGoodsInfos">
              <div className="hotGoodsName">{item.name}</div>
              <div className="hotGoodsInfo">{item.goods_brief}</div>
              <div className="hotGoodsPrice">￥{item.retail_price}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const TopGoods = ({ topicList }) => {
  return (
    <div className="topGoodsBox">
      <div className="topGoodsTitle">专题精选</div>
      <div className="topGoodsWrap">
        <Carousel dots={false} infinite slideWidth={0.85} cellSpacing={10}>
          {topicList.map(item => (
            <Link
              to={`/topicDetail/${item.id}`}
              key={item.id}
              className="topGoodsItem"
            >
              <img src={item.item_pic_url} alt="img load failed"></img>
              <div className="topGoodSubTitle">
                {item.title}{' '}
                <span className="topGoodPrice">￥{item.price_info}元起</span>
              </div>
              <div className="topGoodTitle">{item.subtitle}</div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

const CateGoryGoods = ({ categoryList }) => {
  return (
    <div className="cateGoryBox">
      {categoryList.map(item => {
        return (
          <Fragment>
            <div className="cateGoryName">{item.name}</div>
            <div className="cateGoryGoodsWrap">
              {item.goodsList.map(item => {
                return (
                  <Link to={`/goods/${item.id}`} tag="div" key={item.id}>
                    <div className="goodsItemImg">
                      <img src={item.list_pic_url} alt="img load failed"></img>
                    </div>
                    <div className="goodsItemName">{item.name}</div>
                    <div className="goodsItemPrice">￥{item.retail_price}</div>
                  </Link>
                );
              })}
              <Link to={`/categorys/${item.id}`} className="categoryMoreGoods">
                <div>更多{item.name}好物</div>
                <img src={moreImg} alt="more" />
              </Link>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [],
      newGoodsList: [],
      channel: [],
      hotGoodsList: [],
      brandList: [],
      topicList: [],
      categoryList: []
    };
  }

  componentDidMount() {
    this.props.setAnimationState();
    this.setDataForHome();
  }

  async setDataForHome() {
    const {
      banner,
      newGoodsList,
      channel,
      hotGoodsList,
      brandList,
      topicList,
      categoryList
    } = await HttpService.dataForHomePage();
    this.setState({
      banner: banner,
      newGoodsList: newGoodsList,
      channel: channel,
      hotGoodsList: hotGoodsList,
      brandList: brandList,
      topicList: topicList,
      categoryList: categoryList
    });
    this.props.setAnimationStateFalse();
  }

  render() {
    return (
      <Fragment>
        <Carousel autoplay infinite>
          {this.state.banner.map(item => (
            <div key={item.id} className="img-wrapper">
              <img
                className="img-container"
                src={item.image_url}
                alt="sss"
              ></img>
            </div>
          ))}
        </Carousel>

        <Channel channel={this.state.channel}></Channel>

        <BrandList brandList={this.state.brandList}></BrandList>

        <NewGoods newGoodsList={this.state.newGoodsList}></NewGoods>

        <HotGoods hotGoodsList={this.state.hotGoodsList}></HotGoods>

        <TopGoods topicList={this.state.topicList}></TopGoods>

        <CateGoryGoods categoryList={this.state.categoryList}></CateGoryGoods>
      </Fragment>
    );
  }
}

export default Home;

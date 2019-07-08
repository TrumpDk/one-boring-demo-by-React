import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './goodsList.scss';

class GoodsList extends Component {
  render() {
    const { goodsList } = this.props;
    return (
      <div className="goodsList">
        {goodsList.map(item => {
          return (
            <Link to={`/goods/${item.id}`} key={item.id} className="goodsItem">
              <div className="goodsItemImg">
                <img src={item.list_pic_url} alt="img load failed" />
              </div>
              <div className="goodsItemName">{item.name}</div>
              <div className="goodsItemPrice">￥{item.retail_price}元</div>
            </Link>
          );
        })}
      </div>
    );
  }
}
export default GoodsList;

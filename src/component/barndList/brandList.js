import React from 'react';
import { Link } from 'react-router-dom';

class BrandList extends React.Component {
  render() {
    return (
      <div className="brandBox">
        <div className="brandTitle">品牌制造商直供</div>
        <div className="brandWrap">
          {this.props.brandList.map(item => (
            <Link
              to={`/brandDetail/${item.id}`}
              className="brandItem"
              key={item.id}
            >
              <div className="brandItemName">{item.name}</div>
              <div className="brandItemMinPrice">{item.floor_price}元起</div>
              <img src={item.new_pic_url} alt="sadadsadsads"></img>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default BrandList;

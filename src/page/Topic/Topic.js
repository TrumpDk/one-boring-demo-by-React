import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HttpService from '../../http/httpList';
import './Topic.scss';

class Topic extends React.Component {
  state = {
    topicData: []
  };

  componentWillMount() {
    this.props.setAnimationState();
    this.fechTopicData();
  }

  async fechTopicData() {
    const { data } = await HttpService.getTopicData({ page: 1, size: 100 });
    this.setState({
      topicData: data
    });
    this.props.setAnimationStateFalse();
  }
  render() {
    return (
      <Fragment>
        {this.state.topicData.map(item => (
          <div throttle={200} height={300} key={item.id}>
            <Link className="topicItem" to={`/topicDetail/${item.id}`}>
              <img src={item.scene_pic_url} alt="img load failed" />
              <div className="topicItemTitle">{item.title}</div>
              <div className="topicItemSubtitle">{item.subtitle}</div>
              <div className="topicItemPrice">{item.price_info}元起</div>
            </Link>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default Topic;

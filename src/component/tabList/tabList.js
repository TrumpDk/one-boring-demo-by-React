import React from 'react';
import './tabList.scss';
import RouterList from '../../router/RouterList';
import { withRouter, Link } from 'react-router-dom';

const Tablist = props => {
  const {
    tabList,
    history: {
      location: { pathname }
    }
  } = props;
  let showTab = false;
  RouterList.forEach(item => {
    if (item.link === pathname) {
      showTab = item.isTab;
    }
  });

  return showTab ? (
    <nav className="tab">
      {tabList.map((item, index) => (
        <Link
          className={pathname === item.url ? 'tabItem active' : 'tabItem'}
          key={index}
          to={item.url}
        >
          <div
            className={
              pathname === item.url ? 'itemIcon activeIcon' : 'itemIcon'
            }
          >
            <i className={item.icon}></i>
          </div>
          <div className="itemName">{item.name}</div>
        </Link>
      ))}
    </nav>
  ) : null;
};

export default withRouter(Tablist);

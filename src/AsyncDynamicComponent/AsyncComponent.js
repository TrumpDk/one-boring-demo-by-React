import React from 'react';

// lazyLoadComponent is a thunk functionality
export default function asyncComponent(lazyLoadComponent) {
  return class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await lazyLoadComponent();
      this.setState({
        component: component
      });
    }

    render() {
      const AsyncCom = this.state.component;
      return AsyncCom ? <AsyncCom {...this.props}></AsyncCom> : null;
    }
  };
}

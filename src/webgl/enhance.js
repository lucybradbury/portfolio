import React from 'react';
import webgl from '../webgl';

export default Component =>
  class extends React.Component {
    componentDidMount() {
      webgl();
    }
    render() {
      return (
        <React.Fragment>
          <div id="canvas" />
          <Component {...this.props} />
        </React.Fragment>
      );
    }
  };

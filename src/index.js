import React from 'react';
import { render } from 'react-dom';

class Root extends React.Component {
  render() {
    return <div> Hello there </div>;
  }
}

const node = document.querySelector('[app]');
render(<Root />, node);

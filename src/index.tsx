import * as React from 'react';
import * as ReactDOM from 'react-dom';

let click = (ev: MouseEvent) => {
  console.log('Hello world!'); // tslint:disable-line:no-console
};

ReactDOM.render(<div onClick={click}>Hello world!</div>, document.getElementById('app'));

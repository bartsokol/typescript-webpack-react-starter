import * as React from 'react';

export interface HelloWorldProps {
  name: string;
}

export class HelloWorld extends React.Component<HelloWorldProps, {}> {
  public render() {
    return <div onClick={this.click}><b>{this.props.name}</b> says: <em>Hello, world!</em></div>;
  }

  private click(ev: MouseEvent) {
    console.log('Hi!'); // tslint:disable-line:no-console
    alert('Hi!');
  }
};

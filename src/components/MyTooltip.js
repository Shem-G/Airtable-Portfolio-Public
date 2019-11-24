import React, {Component} from 'react';
import { Popover } from 'react-bootstrap';

export default class MyPopover extends Component{
  // eslint-disable-next-line
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Popover id="popover-trigger-focus" title={this.props.title} {...this.props}>
          { this.props.children }
      </Popover>
    );
  }
}
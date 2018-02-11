import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'antd';

class InputNumber extends React.Component {
  //
  constructor(props) {
    //
    super(props);
    this.state = {
      number: props.defaultValue
    }
    this.changeNumber = this.changeNumber.bind(this);
  }
  changeNumber(diff) {
    //
    const sum = this.state.number + diff;
    if (sum < 1 || sum > 9) {
      return;
    }
    this.setState({number: sum});
    this.props.onChange(sum);
  }
  render() {
    if (this.props.size === 'Large') {
      return (
        <div
          style={{
            verticalAlign: 'bottom',
            padding: '2px',
            background: '#fff',
            fontSize: '12px',
            display: 'inline-block',
            borderRadius: '5px',
            margin: '5px',
            overflow: 'hidden',
            boxShadow: '0 1px 2px #ddd'
          }}
        >
          <span
            style={{
              padding: '4px',
              color: '#f15f53',
              fontWeight: 'bold',
              borderRight: '2px solid #ddd'
            }}
            onClick={() => this.changeNumber(-1)}
          >
            <Icon type="minus" />
          </span>
          <span
            style={{
              padding: '8px'
            }}
          >
            {this.state.number}
          </span>
          <span
            style={{
              padding: '4px',
              color: 'green',
              fontWeight: 'bold',
              borderLeft: '2px solid #ddd'
            }}
            onClick={() => this.changeNumber(1)}
          >
            <Icon type="plus" />
          </span>
        </div>
      );
    } else if (this.props.size === 'Small') {
      return (
        <div
          style={{
            padding: '1px',
            background: '#fff',
            fontSize: '9px',
            display: 'inline-block',
            borderRadius: '5px',
            margin: '0px',
            overflow: 'hidden',
            boxShadow: '0 1px 2px #ddd'
          }}
        >
          <span
            style={{
              padding: '2px',
              color: '#f15f53',
              fontWeight: 'bold',
              borderRight: '2px solid #ddd'
            }}
            onClick={() => this.changeNumber(-1)}
          >
            <Icon type="minus" />
          </span>
          <span
            style={{
              padding: '4px'
            }}
          >
            {this.state.number}
          </span>
          <span
            style={{
              padding: '2px',
              color: 'green',
              fontWeight: 'bold',
              borderLeft: '2px solid #ddd'
            }}
            onClick={() => this.changeNumber(1)}
          >
            <Icon type="plus" />
          </span>
        </div>
      );
    }
    return null;
  }

}

InputNumber.propTypes = {
  //
  defaultValue: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputNumber

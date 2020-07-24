import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDown: false,
      showElement: this.props.list[0].item,
    };
  }

  handleDropDown = (value) => {
    this.setState({ dropDown: !this.state.dropDown, showElement: value });
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.props.children}</div>
        {this.state.dropDown ? (
          this.props.list.map((element) => (
            <div key={element.id} onClick={() => this.handleDropDown(element.item)}>
              {element.item}
            </div>
          ))
        ) : (
          <div onClick={this.handleDropDown}>{this.state.showElement}</div>
        )}
      </React.Fragment>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
};

Dropdown.defaultProps = {
  children: 'Título Default',
};

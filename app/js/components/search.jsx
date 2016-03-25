import React, { Component } from 'react'

export default class SimpleExSearchBoxample extends Component {
  render() {
    return (
          <div className="column">
            <div className="ui raised padded segment">
                <div className="ui fluid icon input">
                  <input type="text" placeholder="Search..." />
                  <i className="inverted circular search link icon"></i>
                </div>
              </div>
            </div>
    );
  }
};

import React, { Component } from 'react'
import SearchBox from './search.jsx';
import SimpleExample from './mapMain.jsx'

export default class CommentBox extends Component {
  render() {
    return (
        <div className="ui one column padded grid">
          <div className="column">
              <div className="ui raised padded segment">
                <h2 className="ui header">Explore a River Basin</h2>
                <p>To get started click a River Basin on the map, or search for a location.</p>
              </div>
            </div>
            <SearchBox />
            <SimpleExample />
        </div>
    );
  }
};

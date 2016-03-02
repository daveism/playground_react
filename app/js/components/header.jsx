var React = require('react');

var CommentBox = React.createClass({
  render: function() {
    return (
        // <div className="ui grid">
        //   <div class="row">
        //     <div class="ten column">
        <div className="ui one column padded grid">
          <div className="column">
              <div className="ui raised padded segment">
              <div className="ui blue ribbon label">
                 <i className="spoon icon"></i> Food
               </div>
                <h2 className="ui header">Expore a River Basin</h2>
                <p>Expore a River Basin</p>
                <p>Expore a River Basin</p>
              </div>
            </div>
          <div className="column">
              <div className="ui raised padded segment">
                <h2 className="ui header">Expore a River Basin</h2>
                <p>Expore a River Basin</p>
                <p>Expore a River Basin</p>
              </div>
          </div>
        </div>
        //     </div>
        //   </div>
        // </div>
    );
  }
});

module.exports = CommentBox;

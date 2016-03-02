var React = require('react');

var CommentBox = React.createClass({
  render: function() {
    return (
    <div className="ui ordered steps">
      <div className="completed step">
        <div className="content">
        <div className="title">Shipping</div>
        <div className="description">Choose your shipping options</div>
        </div>
      </div>
      <div className="completed step">
        <div className="content">
          <div className="title">Billing</div>
          <div className="description">Enter billing information</div>
        </div>
      </div>
      <div className="active step">
        <div className="content">
          <div className="title">Confirm Order</div>
          <div className="description">Verify order details</div>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = CommentBox;

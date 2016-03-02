var React = require('react');
var ReactDom = require('react-dom');

var CommentBox = require('./components/search.jsx');

ReactDom.render(
    <CommentBox/>,
    document.getElementById('content')
);

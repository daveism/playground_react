var React = require('react');
var ReactDom = require('react-dom');

var SearchBasin = require('./components/header.jsx');

ReactDom.render(
    <SearchBasin/>,
    document.getElementById('content')
);

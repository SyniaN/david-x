import React, { Component } from 'react';
import './App.css';

class App extends Component {

    render() {
        const iframeStyle = {
            width: "100vw",
            height: "100vh"
        }
        return (
            <iframe style={iframeStyle} src="https://spark.adobe.com/page/iQYm9bUl8WQgp/"></iframe>
        );
    }
}

export default App;

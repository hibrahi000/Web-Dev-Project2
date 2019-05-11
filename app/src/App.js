import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import Slides from './components/Slides/Slides'
class App extends Component {
  render() {
    return (
      <Layout>
        <Header></Header>
        <Slides />
        <Footer />
      </Layout>
    );
  }  
}

export default App;

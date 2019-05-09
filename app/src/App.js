import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
class App extends Component {
  render() {
    return (
      <Layout>
        <Header></Header>
        <Footer />
      </Layout>
    );
  }  
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Catagory from './pages/Catagory'
import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
          <BrowserRouter>
          <Route path="/" component={Home} exact />
          <Route path="/Catagory" component={Catagory} />
          </BrowserRouter>
        <Footer />
      </Layout>
    );
  }  
}

export default App;

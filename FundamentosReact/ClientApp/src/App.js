import React, { Component } from 'react';
import { Route } from 'react-router'; // localhost/prueba
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Curso from './components/Curso'
import Prueba from './components/Prueba';
import Games from "./components/Games";

import './css/fontawesome/css/all.min.css' // importar un css
import './css/custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/prueba' component={Prueba} />
        <Route path='/curso' component={Curso} /> 
        <Route path='/games' component={Games} /> 
          
      </Layout>
    );
  }
}

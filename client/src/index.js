import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from '../src/store/configureStore'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()
store.subscribe(()=>{
  console.log(store.getState())
})
const jsx = (<Provider store={store}>
 <App/>
</Provider>)
ReactDOM.render(jsx,document.getElementById('root'))

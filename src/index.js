import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import reactDom from 'react-dom';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';

export let rerenderEntireTree = () => {
  reactDom.render(
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

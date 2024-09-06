import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/reduxStore';
import SoulJsApp from './App';

let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <SoulJsApp />
    );
}

rerenderEntireTree(store.getState());
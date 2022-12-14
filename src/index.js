import './index.css';
import state, { changeValue, focusedValue, postRequest, subscribe, isDisabled } from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} changeValue={changeValue} />
  </React.StrictMode>
);

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} 
        changeValue={changeValue} 
        focusedValue={focusedValue}
        postRequest={postRequest}
        isDisabled={isDisabled}
      />
    </React.StrictMode>
  );
}

renderEntireTree(state);

subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

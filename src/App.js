import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Main 
        state={props.state} 
        changeValue={props.changeValue} 
        focusedValue={props.focusedValue}
        postRequest={props.postRequest}
        isDisabled={props.isDisabled}
      />
    </div>
  );
}

export default App;

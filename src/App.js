import './App.css';
import { Component } from 'react';
import { sampleText } from './sampleText'

class App extends Component{
  render() {
    return(
      <div className='container'>
        <div className = 'row'>
          <div className='col-sm-6'>
            <textarea className='form-control' rows='35' value ={sampleText}></textarea>
          </div>
          <div className='col-sm-6'>
            { sampleText }
          </div>
        </div>
      </div>
    )
  }
}
export default App;

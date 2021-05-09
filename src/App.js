import './App.css';
import { Component } from 'react';
import { sampleText } from './sampleText'
import marked from 'marked'
import { render } from 'react-dom';

class App extends Component{
  state = {
    text:sampleText
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = text => {
    const __html = marked(text,{ sanitize: true })
    return {__html}
  }
  render() {
    return(
      <div className='container'>
        <div className = 'row'>
          <div className='col-sm-6'>
            <textarea
              onChange ={this.handleChange}
              value ={this.state.text }
              className='form-control'
              rows='35'
            />
          </div>
          <div className='col-sm-6'>
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;

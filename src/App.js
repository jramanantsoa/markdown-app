import './App.css';
import { Component, Fragment } from 'react'
import { sampleText } from './sampleText'
import marked from 'marked'

class App extends Component{
  state = {
    text:sampleText
  }

  componentDidMount () {
    const text = localStorage.getItem('text')
    if (text){
      this.setState({ text })
    }
    else{
      this.setState({text:sampleText})
    }
    
  }
  componentDidUpdate(){
    const text = this.state.text
    localStorage.setItem('text',text)
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Editeur de Markdown (React.js)</a>
        </nav>
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

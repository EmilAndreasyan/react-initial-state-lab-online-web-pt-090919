// your ImageSlider code here!
import React, { Component} from 'react'

export default class ImageSlider extends Component {
  constructor(){
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
  
  // slider = () => {
  //   slideIndex = this.state.currentSlideIndex + 1
  //   this.setState({currentSlideIndex: slideIndex})
  // }
  
  
  slider = () => {
    this.setState(prevState => {
      return (currentSlideIndex: prevState.currentSlideIndex + 1)
    })
  }
  
  render() {
    return (
      <div onClick={this.slider}>
      <p>I am on slide {this.state.currentSlideIndex}</p>
      </div>
      )
  
}
}

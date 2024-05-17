import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// React Awesome Slider

const AwesomeSld = () => {
  return (
    <div>
      <AwesomeSlider>
        <div style={{ "background": "black"}}>1</div>
        <div style={{ "background": "yellow"}}>2</div>
        <div style={{ "background": "blue"}}>3</div>
        <div style={{ "background": "green"}}>4</div>
      </AwesomeSlider>
    </div>
  )
}

export default AwesomeSld
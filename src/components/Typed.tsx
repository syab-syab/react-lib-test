import React from 'react'
import { ReactTyped } from "react-typed";

// react-typed

const Typed = () => {
  return (
    <div>
      <div>
        <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />
        <br />

        <ReactTyped
          strings={[
            "Search for products",
            "Search for categories",
            "Search for brands",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input type="text" />
        </ReactTyped>
      </div>
    </div>
  )
}

export default Typed
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const RandomUUID = () => {
  // console.log("ランダム生成 = ", uuidv4())
  const random = uuidv4()
  return (
    <div>
      <p>random uuid = {random}</p>
    </div>
  )
}

export default RandomUUID
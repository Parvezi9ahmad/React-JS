
import './App.css'
import Nav from './components/nav/Nav'
import Ref from './components/ref/Ref'
import Timer from './components/timer/Timer'
import RefDom from './components/ref/RefDom'
import UseReducer from './components/reducer/UseReducer'
import Image from './components/useeffect/lifecycle/Image'
import Text from './components/useeffect/lifecycle/Text'
import { useState } from 'react'
import Users from './components/useeffect/lifecycle/Users'




function App() {
  const [showImage, setShowImage] = useState(true);
  return (
    <div className="app">

      
      <Nav />

      <Users />
      {showImage ? <Image /> : <Text />}
      <br /><br />
      <button onClick={() => { setShowImage(true) }}>Show Image</button>&nbsp;&nbsp;&nbsp;
      <button onClick={() => { setShowImage(false) }}>Show Text</button>

      {/* <RefDom /> */}
      {/* <UseReducer /> */}
      {/* <Timer />
      <Ref /> */}

    </div>
  )
}

export default App

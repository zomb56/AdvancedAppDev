// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Yoga Academy Admission Portal</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { BrowserRouter,Routes , Route } from "react-router-dom"
import "./App.css"
import '@emotion/styled';
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Home from "./components/Home/Home"
import Feedback from "./components/Feedback/Feedback"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Programs from "./components/Programs/Programs"
import Admin from "./components/Admin/Admin"
const App = () => {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element ={<Login/>}/>
        <Route path="/home" element ={<Home/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/feedback" element ={<Feedback/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/programs" element ={<Programs/>}/>
        <Route path="/admin" element ={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
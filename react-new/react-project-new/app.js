import React from "react"
import NavBar from "./components/navbar"
import Main from "./components/main"



export default function  App() {
    return ( 
        <div className="container">
            
            <Main />
            <NavBar />

        </div>
            
    
    )
   
}

ReactDOM.render(<App />).document.getElementByID("root")
import React from 'react'
import './App.css'
import Book from './component/Book'
import Carosuel from './component/Carosuel'
import Card from './component/Card'
import Footer from './component/Footer'

 

function App() {
  return (
    <>
    <div>
      <div>
        
      <Book></Book> 
      </div>

      <div>

      <Carosuel></Carosuel>
    
      </div>
      <div>
        <Card></Card>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
    
    </>
  )
}

export default App
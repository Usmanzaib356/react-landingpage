import React from 'react'
import card1 from './card1.jpg'
function Card() {
  return (
    <>
    <div>
      
      <h1 className='prd'>Products</h1>
      <div className='main-card'>
     <div className="card" id='cardsize'>
  <img src={card1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
 

<div className="card" id='cardsize'>
  <img src={card1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


<div className="card" id='cardsize'>
  <img src={card1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>



<div className="card" id='cardsize'>
  <img src={card1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>




</div>
    </div>
    
    </>
  )
}

export default Card
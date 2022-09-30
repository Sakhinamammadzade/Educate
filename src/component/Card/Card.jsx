import React from 'react'
import CardItem from './CardItem'
import"../Card/card-item.scss";


const Card = () => {
  return ( 
   
        <div className="all-cards">
                <div className="container">
                    <div className="row ">
                     <CardItem/>
                     <CardItem/>
                     <CardItem/>
                     
                     

                    </div>
                </div>
    </div>

    
  
  )
}

export default Card
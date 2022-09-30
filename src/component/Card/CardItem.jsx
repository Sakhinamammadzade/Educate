import React from 'react'

const CardItem = (props) => {
  return(
     <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
         <div className="card">
            <div className="card-body">
              <img src={props.img} alt="" />
              <title>{props.desc}</title>
            </div>
            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="name">
                        <h6>Jhon Doe</h6>
                    </div>
                    <div className="point">
                        <h5>4.5(250)</h5>
                    </div>
                </div>
            </div>
         </div>
    </div>
 
  
  
  )
}

export default CardItem
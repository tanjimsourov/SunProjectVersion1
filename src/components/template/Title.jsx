import React from 'react'
import './Title.module.css'

function Title() {
  return (
    <div className="row">
        <div className='col-xs-12 col-sm-9 col-lg-10'>
            <h2>Dit gebouw produceert zonne-energie!</h2>
        </div>
        <div className='col-xs-12 col-sm-3 col-lg-2' style={{'text-align': 'end'}}>
            <h2>Info 2023</h2>
        </div>
    </div>
  )
}

export default Title
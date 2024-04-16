import React from 'react';

import Img1 from '../../assets/img/thirty-page/1.jpeg'
import Img2 from '../../assets/img/thirty-page/2.jpeg'
import Img3 from '../../assets/img/thirty-page/3.jpeg'
import Img4 from '../../assets/img/thirty-page/4.jpeg'
import Img5 from '../../assets/img/thirty-page/5.jpeg'
import Img6 from '../../assets/img/thirty-page/6.jpeg'

function ThirthyPage() {
  return (
    <>
            <div className='full-page flex flex-direction-column' style={{background: '#16A085', padding: '10px',minHeight: '100vh'}}>                
            <div className="row">
                <div className="col-xs-12 col-sm-4 flex">
                    <div className="img-col-wrap">
                        <h3 className='text-center'>Brugge</h3>
                        <img style={{height: 'calc(50vh - 80px)'}} src={Img1} alt="" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4 flex">
                    <div className="img-col-wrap">
                        <h3 className='text-center'>Oostende</h3>
                        <img style={{height: 'calc(50vh - 80px)'}} src={Img3} alt="" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4 flex">
                    <div className="img-col-wrap">
                        <h3 className='text-center'>Geel</h3>
                        <img style={{height: 'calc(50vh - 80px)'}} src={Img5} alt="" />
                    </div>
                </div>
            </div>
            
            <div className='row'>
                <div className="col-xs-12 col-sm-4 flex">
                    <div className="img-col-wrap">
                        <h3 className='text-center'>Oostende</h3>
                        <img style={{height: 'calc(50vh - 80px)'}} src={Img2} alt="" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4 flex">
                    <div className="img-col-wrap">
                        <h3 className='text-center'>Zaventem Logistics</h3>
                        <img style={{height: 'calc(50vh - 80px)'}} src={Img4} alt="" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4 flex">
                    <div className="img-col-wrap">
                        <h3 className='text-center'>Zaventem Showroom</h3>
                        <img style={{height: 'calc(50vh - 80px)'}} src={Img6} alt="" />
                    </div>
                </div>
            </div>
                           
            </div>
        </>
  )
}

export default ThirthyPage
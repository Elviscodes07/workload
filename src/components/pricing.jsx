import React from 'react'
import { Navbar } from './navbar'
import pricing1 from './images/pricing-free.png'
import pricing2 from './images/pricing-business.png'
import pricing3 from './images/pricing-starter.png'

export const Pricing = () => {
  return (
    <div>
        <Navbar></Navbar>
        <h3 className='my-4 text-center purple fw-bold'>Our Pricing</h3>
        <h3 className='text-center'>Here is our Pricing list</h3>

        <div className='d-flex justify-content-around align-item-center mt-5'>
          <div class="card" style={{width: '18rem'}}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <img src={pricing1} alt="" className='pricingimage' />
              </li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
          <div class="card" style={{width: '18rem'}}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <img src={pricing2} alt="" className='pricingimage' />
              </li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
          <div class="card" style={{width: '18rem'}}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <img src={pricing3} alt="" className='pricingimage' />
              </li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

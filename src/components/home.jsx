import React from 'react'
import { Navbar } from './navbar'
import heroimage from './images/hero-img.png'
import client1 from './images/client-1.png'
import client2 from './images/client-2.png'
import client3 from './images/client-3.png'
import client4 from './images/client-4.png'
import client5 from './images/client-5.png'
import client6 from './images/client-6.png'
import client7 from './images/client-7.png'
import client8 from './images/client-8.png'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Navbar></Navbar>
        

        <div className="mybg">
            <h2 className='purple text-center' data-aos="fade-right">We offer mordern solutions for growing your business</h2>
            <p className='fs-5 text-center my-2 px-2' data-aos="fade-right">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ad ipsam ratione dolores, maiores minus perferendis qui at corrupti velit!
            </p>

            <button className='btn btn-primary btn-lg my-4' onClick={() => {
                navigate('/pricing')
            }}>Get Started</button>

            <img src={heroimage} alt="" className='my-4 img-fluid' data-aos="fade-up" data-aos-duration="3000" />
        </div>
        <div className='clients mt-5 px-3'>
            <h2 className='purple text-center fw-bold fs-2 mb-4' data-aos="fade-up">Our Clients</h2>

            <div className='d-flex justify-content-center gap-5 align-items-center flex-wrap px-3 my-5' data-aos="zoom-in">
                <img src={client1} alt="" className='clientimage'/>
                <img src={client2} alt="" className='clientimage'/>
                <img src={client3} alt="" className='clientimage'/>
                <img src={client4} alt="" className='clientimage'/>
                <img src={client5} alt="" className='clientimage'/>
                <img src={client6} alt="" className='clientimage'/>
                <img src={client7} alt="" className='clientimage'/>
                <img src={client8} alt="" className='clientimage'/>
            </div>
        </div>

        <div className='who'>
            <h3 className='purple' data-aos="fade-right">Who are we?</h3>
            <p className='mt-3 fs-5'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sint accusamus asperiores libero dolorum doloremque eos debitis at assumenda omnis sapiente corporis iste, impedit hic, ducimus culpa quos ut quaerat. Aliquam itaque sapiente exercitationem, quis eveniet corporis soluta quia reprehenderit nam ad, sit atque quos error recusandae dolores corrupti magnam. Tempora eius aliquid esse ullam rem nulla vero vitae? Repudiandae adipisci delectus odit rem enim natus impedit voluptas unde fuga.
            </p>

            <button className='btn btn-danger btn-lg' onClick={() => {
                navigate('/about') 
            }}>Learn More</button>
        </div>
    </div>
  )
}

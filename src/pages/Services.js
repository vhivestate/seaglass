import React from 'react'

function Services() {
  return (
    <div>
{/* hero */}
    <div className="hero h-64 bg-fixed" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                <h1 className="text-5xl font-light text-white">Services</h1>
            </div>
        </div>
    </div>

{/* first lash carousel */}
<h2 className='text-center text-4xl'>Lashes</h2>
    <div className='lashes'>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Classic Set</h2>
                <ul>
                    <dd>Full Set $80.00</dd>
                    <dd>2nd Week Fill $50.00</dd>
                    <dd>3rd Week Fill $60.00</dd>
                </ul>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 

    <div id="slide2" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Hybrid Set</h2>
                    <ul>
                        <dd>Full Set $100.00</dd>
                        <dd>2nd Week Fill $60.00</dd>
                        <dd>3rd Week Fill $70.00</dd>
                    </ul>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div> 


    <div id="slide3" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Volume Set</h2>
                    <ul>
                        <dd>Full Set $120.00</dd>
                        <dd>2nd Week Fill $75.00</dd>
                        <dd>3rd Week Fill $90.00</dd>
                    </ul>
            </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 

        <div id="slide4" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Lash Tint & Lifts</h2>
                    <ul>
                    <li>Lash Lift: $60.00</li>
                    <li>Lash Lift & Tint: $75.00</li>
                    <li>Lash Tint: $20.00</li>

                    </ul>
            </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    </div>

    <div className="card-actions justify-center">
        <button className="btn btn-primary">Book Service</button>
    </div>

    {/* second brow carousel */}

    <h2 className='text-center text-4xl'>Eyebrows</h2>
    <div className='eyebrows'>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Lamination</h2>
                <ul>
                    <li>Brow Lamination: $50.00</li>
                    <li>Brow Lamination + Henna Tint: $65.00</li>
                </ul>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 

    <div id="slide2" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Tint</h2>
                <ul>
                    <li>Henna Brow Tint: $25.00</li>
                    <li>Brow Lamination + Henna Tint: $65.00</li>
                </ul>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div> 


    <div id="slide3" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Wax</h2>
                    <ul>
                    <li>Eyebrow Wax: $25.00</li>
                    </ul>
            </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
    </div>
    </div>

    <div className="card-actions justify-center">
        <button className="btn btn-primary">Book Service</button>
    </div>


{/* Makeup */}

<h2 className='text-center text-4xl'>Makeup</h2>
    <div className='makeup'>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Bridal</h2>
                <ul>
                    <dd>Full Set $80.00</dd>
                    <dd>2nd Week Fill $50.00</dd>
                    <dd>3rd Week Fill $60.00</dd>
                </ul>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 

    <div id="slide2" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Date Night</h2>
                    <ul>
                        <dd>Full Set $100.00</dd>
                        <dd>2nd Week Fill $60.00</dd>
                        <dd>3rd Week Fill $70.00</dd>
                    </ul>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div> 


    <div id="slide3" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Everyday Look</h2>
                    <ul>
                        <dd>Full Set $120.00</dd>
                        <dd>2nd Week Fill $75.00</dd>
                        <dd>3rd Week Fill $90.00</dd>
                    </ul>
            </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 

        <div id="slide4" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Special Event</h2>
                    <ul>
                    <li>Full Leg Wax: $65.00</li>
                    <li>Half Leg Wax: $50.00</li>
                    <li>Full Arm Wax: $40.00</li>
                    <li>Half Arm Wax: $25.00</li>
                    <li>Eyebrow Wax: $25.00</li>
                    <li>Lip Wax: $15.00</li>
                    </ul>
            </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    </div>


    <div className="card-actions justify-center">
        <button className="btn btn-primary">Book Service</button>
    </div>

{/* Waxes */}
<h2 className='text-center text-4xl'>Wax</h2>
    <div className='wax'>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Face</h2>
                <ul>
                    <li>Eyebrow Wax: $25.00</li>
                    <li>Lip Wax: $15.00</li>
                </ul>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 

    <div id="slide2" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
            <h2 className="card-title">Arms</h2>
                <ul>
                    <li>Full Arm Wax: $40.00</li>
                    <li>Half Arm Wax: $25.00</li>
                </ul>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div> 


    <div id="slide3" className="carousel-item relative w-80">
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Legs</h2>
                <ul>
                    <li>Full Leg Wax: $65.00</li>
                    <li>Half Leg Wax: $50.00</li>
                </ul>
            </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
    </div>
    </div>

    <div className="card-actions justify-center">
        <button className="btn btn-primary">Book Service</button>
    </div>

    </div>
  )
}

export default Services
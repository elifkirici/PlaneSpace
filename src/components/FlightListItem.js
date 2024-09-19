import React from 'react'
import plane from "../assets/plane.svg"
import alitalia from "../assets/Alitalia_logo.png"
function FlightListItem() {
    return (

        //FlightListItem start
        <>
            <div className='flight-list-item bg-white w-11/12 md:w-[55%] relative rounded-lg'>

                { /* flight-info start */}
                <div className='flight-info p-5'>
                    <div className='w-auto flex'>
                        <h1 className='font-bold text-base'>Milano-Madrid</h1>
                    </div>
                    <div className='flex items-center justify-between mt-8 text-xs text-dark-text'>
                        <p>Departure</p>
                        <img src={alitalia} className="h-3 w-10 md:w-14" alt="Plane" />
                        <p className='mr-9' >Arrival</p>
                    </div>
                    { /* flight-info-content start */}

                    <div className='flight-info-content flex items-center text-justify mb-8'>
                        <div className='flex flex-col gap-1 justify-start font-semibold'>
                            <p className='text-dark-text'>7:30 AM</p>
                            <span className='text-xs text-light-text'>Airport:MXP</span>
                        </div>
                        <hr className="border border-light-text mx-auto px-5 md:px-10" />
                        <div className='flex flex-col gap-3 items-center'>
                            <img src={plane} className="h-5 w-5 fill-dark-purple" alt="Plane" />
                            <p className='text-xs text-light-text'>
                                2h 25m (Nonstop)
                            </p>
                        </div>
                        <hr className="border border-light-text mx-auto px-5 md:px-10" />
                        <div className='flex flex-col gap-1 justify-start font-semibold'>
                            <p className='text-dark-text'>7:30 AM</p>
                            <span className='text-xs text-light-text'>Airport:MXP</span>
                        </div>
                    </div>
                    { /* flight-info-content end */}

                    { /* bottom-flight-info-content start */}
                    <div className='flight-info-bottom-content flex justify-between'>
                        <div className='flex flex-col gap-1 text-justify font-bold'>
                            <p className='text-dark-purple text-lg'>Price: 200</p>
                            <span className='text-xs text-light-text'>Round Trip</span>
                        </div>
                        <button className='absolute right-0 bottom-0 bg-dark-purple text-white py-5 px-6 md:py-6 md:px-8 rounded-tl-lg rounded-br-lg'>
                            <a href='/' className='font-bold'>
                                Book Flight
                            </a>
                        </button>
                    </div>
                    { /* bottom-flight-info-content end */}

                </div>
                { /* flight-info end */}

            </div>

            { /* check-detail-btn start */}
            <button className='bg-light-btn text-light-purple text-xs rounded-b-lg underline py-4 px-6 flex justify-start'>
                <a href='/' className='font-bold'>
                    Check the details
                </a>
            </button>
            { /* check-detail-btn end */}

        </>
        //FlightListItem end

    )
}

export default FlightListItem
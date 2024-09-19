import React from 'react'
import plane from "../assets/planeDark.svg"
import planeLanding from "../assets/plane-landing.svg"
import planeTakeoff from "../assets/plane-takeoff.svg"
import { useState } from 'react'
function FlightBooking() {

    const [flightTypeActive, setFlightTypeActive] = useState("round-trip")

    return (

        //FlightBooking start
        <div className='flight-booking flex w-fit bg-white my-4 rounded-lg  '>
            <div className='flex flex-col items-start gap-4 p-5'>

                { /* booker-menu start */}
                <div className='booker-menu flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                        <img src={plane} className="mr-4 h-4" alt="Logo" />

                        <p className="uppercase text-dark-text font-bold text-base">
                            Flight Booking
                        </p>
                    </div>
                    <div className='booker-type-links'>
                        <button className={`${flightTypeActive === "round-trip" ? "bg-dark-purple text-white" : "bg-light-btn text-dark-purple"} rounded-tl-2xl rounded-bl-2xl py-2 px-3`} onClick={() => { setFlightTypeActive("round-trip") }}>
                            Round trip
                        </button>
                        <button className={`${flightTypeActive === "one-way" ? "bg-dark-purple text-white" : "bg-light-btn text-dark-purple"} rounded-tr-2xl rounded-br-2xl py-2 px-3`} onClick={() => { setFlightTypeActive("one-way") }}>
                            One way
                        </button>
                    </div>
                </div>
                { /* booker-menu end */}

                { /* flight-booking-content start */}
                <div className='flight-booking-content flex flex-col md:flex-row md:gap-3'>
                    <div className='flex gap-0.5 mb-4 md:mb-0'>
                        <div class="relative">
                            <input type='text' className='outline-light-text border-[1.5px] border-light-text border-opacity-50 rounded-tl-2xl rounded-bl-2xl w-56 px-10 py-1' />
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center  pointer-events-none">
                                <img src={planeTakeoff} className="w-5 h-5" alt='plane takeoff' />
                            </div>
                        </div>
                        <div className='relative'>
                            <input type='text' className='outline-light-text border-[1.5px] border-light-text border-opacity-50 rounded-tr-2xl rounded-br-2xl w-56 px-10 py-1' />
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <img src={planeLanding} className="w-5 h-5" alt='plane takeoff' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-0.5'>
                        <input type='date' className='outline-light-text border-[1.5px] border-light-text border-opacity-50 rounded-tl-2xl rounded-bl-2xl w-56 px-5 py-1' />
                        {flightTypeActive === "round-trip" ? (
                            <input type='date' className='outline-light-text border-[1.5px] border-light-text border-opacity-50 rounded-tr-2xl rounded-br-2xl w-56 px-5 py-1' />
                        ) :
                            (<button type='date' className='outline-light-text border-[1.5px] border-light-text border-opacity-50 rounded-tr-2xl rounded-br-2xl w-56 px-5 py-1 font-semibold text-lg' onClick={() => setFlightTypeActive("round-trip")} > + Add return </button>)
                        }
                    </div>
                </div>
                { /* flight-booking-content end */}

                { /* flight-submit-btn start */}
                <div className='flight-submit-btn'>
                    <button className="bg-dark-purple text-white font-semibold py-2 px-5 rounded-lg">
                        Show Flights
                    </button>
                </div>
                { /* flight-submit-btn end */}

            </div>
        </div>
        //FlightBooking end

    )
}

export default FlightBooking



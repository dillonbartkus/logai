import React, { useState, useEffect } from 'react'

export default function TimeSlot({ timeslot, orders }) {

    const [order, setOrder] = useState()

    

    useEffect( () => {
        const today = new Date().toLocaleDateString()
        const res = orders.filter( order => order.actual_date === today && order.actual_time === timeslot )        
        if(res) setOrder(res[0])        
    }, [])

    return(

        <div className="todayorder">

                <div className="timeslot">

                    <h2>{timeslot}</h2>

                </div>

                {
                    order &&

                <div className="todayorderbox">

                    <div className="todayorderbox-top">

                        <h2>Order #{order.id}</h2>

                        <h2>Client: {order.company}</h2>

                    </div>

                    <div className = "todayorderbox-bottom">

                        <div>
                        <h1>Pickup: {order.actual_time}</h1>
                        </div>

                        <div>
                        <h4>Trucking:</h4>
                        <p>{order.trucking_company}dasdasdas</p>
                        </div>

                        <div>
                        <h4>Driver:</h4>
                        <p>{order.truck_driver}dsdasds</p>
                        </div>

                        <div>
                        <h4>Delivery: {order.actual_date}</h4>
                        </div>

                    </div>

                </div>

                }

            </div>

    )
}
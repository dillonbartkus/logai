import React from 'react'
import TimeSlot from './TimeSlot'

export default function Today({ orders, showOrderDetails }) {

    const timeslots = ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

    return(

        <div className = "today">

            {timeslots.map( timeslot => <TimeSlot showOrderDetails = {showOrderDetails} orders = {orders} timeslot = {timeslot} key = {timeslot} /> )}

        </div>

    )
}
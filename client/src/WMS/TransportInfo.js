import React, { useState } from 'react'
import Calendar from 'react-calendar'

export default function TransportationInfo({ popup, order, setActiveNavItem, updateTransportInfo }) {

    const [company, setCompany] = useState(order.trucking_company || '')
    const [driver, setDriver] = useState(order.truck_driver || '')
    const [date, setDate] = useState(order.actual_date || '')
    const [time, setTime] = useState(order.actual_time || '')

    return(

        <div className = "transportinfo">

            <div
            onClick = { () => popup(false) }
            className = "closepopup"></div>

            <h1 className = "smallheader"> Transportation Information </h1>

            <h2>Trucking Company</h2>

            <input type="text" name = "company" value = {company} onChange = { e => setCompany(e.target.value) }/>

            <h2>Driver</h2>

            <input type="text" name = "driver" value = {driver} onChange ={ e => setDriver(e.target.value) }  />

            <h2>Date</h2>

            <Calendar
            name = "deliveryDate"
            selected = {order.actual_date}
            onChange = { date => setDate(date.toLocaleDateString() ) }
            className ="transportcalendar"/>

            <h2>Time</h2>

            <select
            onChange ={ e => setTime(e.target.value) }
            selected = {order.actual_time} >
                <option></option>
                <option value="5:00 PM">5:00 PM</option>
            </select>

            <button
            onClick = { () => {
                popup(false)
                setActiveNavItem('manager')
                updateTransportInfo(company, driver, date, time, order.id)
            }}
            className ="transportinfo-add"> Add this info</button >

            <button
            onClick = { () => popup(false) }
            className= "transportinfo-cancel">Cancel</button>

        </div>

    )
}
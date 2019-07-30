import React, { useState } from 'react'
import Calendar from 'react-calendar'
import down from '../images/down.png'

export default function TransportationInfo({ popup, order, setActiveNavItem, updateTransportInfo }) {

    const [company, setCompany] = useState(order.trucking_company || '')
    const [driver, setDriver] = useState(order.truck_driver || '')
    const [date, setDate] = useState(JSON.parse(order.preferred_dates).first || '' )
    const [time, setTime] = useState(JSON.parse(order.preferred_times).first[0].length > 1 ? JSON.parse(order.preferred_times).first[0] : JSON.parse(order.preferred_times).first || '')
    
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
            calendarType = "US"
            name = "deliveryDate"
            onChange = { date => setDate(date.toLocaleDateString() ) }
            className ="transportcalendar"/>

            <h2>Time</h2>

            <select
            onChange ={ e => setTime(e.target.value) } >
                <option>{down}</option>
                <option value="7:00 AM">7:00 AM</option>
                <option value="8:00 AM">8:00 AM</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
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
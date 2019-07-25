import React from 'react'
import DatePicker from './DatePicker'
import DatePicker2 from './DatePicker2'
import DatePicker3 from './DatePicker3'

export default function DeliveryForm ({ status, setStatus, setReviewStatus, times, dates, setDates, handleTimeSelect }) {

    const isDone = (status === 'done') ? 'done' : ''

    return(

        <div className = {`delivery ${isDone}`}>

            <h1
            className = {`formtitle ${status}`}>
            3. Delivery Date &amp; Time Preferences</h1>

            {
                status !== 'active' && status !== 'upcoming' &&

                <>

                <div className="dateandtime">

                    <div className = "datestimes">
                    <p style = {{'width' : '100%'}}>#1. {dates.first}:</p>
                    {times.first.map( time => <p key = {time}>{time} </p>)}
                    </div>

                    <div className = "datestimes">
                    <p style = {{'width' : '100%'}}>#2. {dates.second}:</p>
                    {times.second.map( time => <p key = {time}>{time} </p>)}
                    </div>

                    <div className = "datestimes">
                    <p style = {{'width' : '100%'}}>#3. {dates.third}:</p>
                    {times.third.map( time => <p key = {time}>{time} </p>)}
                    </div>

                </div>

                <span
                onClick = {() => {
                    setStatus('active')
                    setReviewStatus('upcoming')
                }}
                className="editbutton">Edit</span>

                </>
                
            }

            {
                status === 'active' &&

                <>
                <DatePicker handleTimeSelect = {handleTimeSelect} setDates = {setDates} dates = {dates}  />
                <DatePicker2 handleTimeSelect = {handleTimeSelect} setDates = {setDates} dates = {dates}  />
                <DatePicker3 handleTimeSelect = {handleTimeSelect} setDates = {setDates} dates = {dates}  />
                </>
            }

            {
                status !== 'done' && status !== 'upcoming' &&

                <button
                style = {{'width' : '25%', 'marginRight' : '30%'}}
                onClick = {() => {
                    setStatus('done')
                    setReviewStatus('active')
                }}
                className="checkoutbutton">Choose these dates &amp; times</button>

            }

        </div>
        
    )
}
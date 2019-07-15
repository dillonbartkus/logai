import React from 'react'
import DatePicker from './DatePicker';

export default function DeliveryForm ({ status, setStatus, setReviewStatus, time, date, setDate, handleTimeSelect }) {

    return(

        <div className = "delivery">

            <h1
            className = {`formtitle ${status}`}
            style = {{'marginTop': 0, 'fontFamily': "Raleway ExtraBold", 'letterSpacing': '1.38px', 'lineHeight': '35px'}}>
            3. Delivery Date &amp; Time</h1>

            {
                status !== 'active' && status !== 'upcoming' &&

                <>

                <div className="dateandtime">

                {date}
                {time.map( time => <p key = {time}>{time}</p>)}

                </div>

                <span
                onClick = {() => {
                    setStatus('active')
                    setReviewStatus('upcoming')
                }}
                style = {{'width' : '50%'}} className="editbutton">Edit</span>

                </>
                
            }

            {
                status === 'active' &&

                <DatePicker handleTimeSelect = {handleTimeSelect} setDate = {setDate} />
            }

            {
                status !== 'done' && status !== 'upcoming' &&

                <button
                onClick = {() => {
                    setStatus('done')
                    setReviewStatus('active')
                }}
                className="checkoutbutton">Choose this Date &amp; Time</button>

            }

        </div>
        
    )
}
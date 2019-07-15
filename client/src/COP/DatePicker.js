import React from 'react'
import Calendar from 'react-calendar'

export default function DatePicker({ setDate, handleTimeSelect}){

  return (

      <div className ="datepicker">

          <Calendar 
          onChange = { date => setDate(date.toLocaleDateString())}
          />

          <br/>
          Please select your preferred delivery time(s): <br/>
          (We recommend selecting a few for flexibility)

          <div className="timeselect">

            <div>
            <input className = "checkbox"  onChange = { e => handleTimeSelect(e)}  type="checkbox" value = '7:00AM' /> 
            7:00 AM
            </div>

            <div>
            <input  className = "checkbox"    onChange = { e => handleTimeSelect(e) } type="checkbox"   value ='1:00PM' /> 
            1:00 PM
            </div>

            <div>
            <input className = "checkbox" onChange = { e => handleTimeSelect(e)} type="checkbox" value ='8:00AM' />
            8:00 AM
            </div>

            <div>
            <input   className = "checkbox" onChange = { e => handleTimeSelect(e)} type="checkbox" value = '2:00PM' />
            2:00 PM
            </div>

            <div>
            <input   className = "checkbox" onChange = { e => handleTimeSelect(e)} type="checkbox" value ='9:00AM' />
            9:00 AM
            </div>

            <div>
            <input  className = "checkbox"  onChange = { e => handleTimeSelect(e)} type="checkbox" value = '3:00PM'/>
            3:00 PM
            </div>

            <div>
            <input className = "checkbox"  onChange = { e => handleTimeSelect(e)} type="checkbox" value = '10:00AM' />
            10:00 AM
            </div>

            <div>
            <input className = "checkbox"  onChange = { e => handleTimeSelect(e)} type="checkbox" value = '4:00PM'/>
            4:00 PM
            </div>

            <div>
            <input className = "checkbox"  onChange = { e => handleTimeSelect(e)}  type="checkbox" value = '11:00AM'/>
            11:00 AM
            </div>

            <div>
            <input className = "checkbox"  onChange = { e => handleTimeSelect(e)} type="checkbox" value = '5:00PM'  />
            5:00 PM
            </div>

            <div>
            <input className = "checkbox"  onChange = { e => handleTimeSelect(e)} type="checkbox" value = '12:00PM'/>
            12:00 PM
            </div>

            <div>
            <input className = "checkbox"  onChange = { e => handleTimeSelect(e)} type="checkbox" value = '6:00PM' />
            6:00 PM
            </div>

          </div>

      </div>

    )
  }
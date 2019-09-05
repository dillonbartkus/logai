import React from 'react'

export default function RosterEmployee({ employee, jobs, id}) {

    const style = (id % 2 === 1) ? { backgroundColor: '#EFEFEF' } : null

    const isActive = jobs.filter( job => job.employee === employee.npc ).length

    return(

        <div className = "countitem" style = {style}>

            <div style = {{'marginLeft' : '2%'}}> {employee.npc} </div>

            <div> <input className = "isemployeeactive" readOnly type = "checkbox" checked = {isActive}></input> </div>

            <div style = {{'marginRight' : '2%'}}> {isActive} </div>

            <div style = {{'marginRight' : '10%'}}> Picking </div>

            <div style = {{'marginRight' : '2%'}}> <button className = "editactivejob">Edit</button> </div>

        </div>

    )
}
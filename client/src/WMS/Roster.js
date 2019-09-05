import React from 'react'
import RosterEmployee from './RosterEmployee'

export default function Roster({ employees, jobs }) {

    const renderEmployees = () => {
        if (employees) return employees.map( (emp, id) => <RosterEmployee employee = {emp} jobs = {jobs} key = {id} id = {id} /> )
    }

    return(

        <div className = "roster">

            <div className = "activejobtitles">

            <div>Name</div>
            <div>Active?</div>
            <div># Active Jobs</div>
            <div>Top Performing Job</div>
            <div style = {{'flex' : 2, 'textAlign' : 'center'}}>
                <button className = "addajob" style = {{'width' : '75%'}}>+ Add an Employee</button>
            </div>

            </div>

            <div className = "activejobs-box">

            {renderEmployees()}
            <div className = "countitem"></div>
            <div className = "countitem gray"></div>
            <div className = "countitem"></div>
            <div className = "countitem gray"></div>

            </div>

        </div>
    )
}
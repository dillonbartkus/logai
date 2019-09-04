import React, { useState } from 'react'
import AssignJob from './AssignJob'
import ActiveJobs from './ActiveJobs'
import Roster from './Roster'
import balloons from '../images/balloons.png'

export default function AssignJobs({ jobs, employees, assign, alert, setAlert, recentJobs, recentEmp }) {

    const [activeTab, setActiveTab] = useState('assign')

    const isInvActive = (activeTab === 'assign') ? 'active' : ''
    const isCountActive = (activeTab === 'active') ? 'active' : ''
    const isReplenishActive = (activeTab === 'roster') ? 'active' : ''

    if (alert && activeTab !== 'assign') {
        setAlert(false)
    }

    return(

        <div className = "assignjobs">

            {alert &&
            <div className = "jobwasassigned">

                <img src = {balloons} alt = '' />

                <div>
                    <h1>Success!</h1>
                    <h2>Job(s) {recentJobs && recentJobs.map( job => <span key = {job}># {job} </span> )} have been assigned to {recentEmp}.</h2>
                </div>

                <button className = "addtocart"
                style = {{'width' : '25%', 'height' : '7vh'}}
                onClick = { () => {
                    setAlert(false)
                    setActiveTab('active') }}
                >View Active Job</button>

            </div>
            }

            <h1 className="bigheader">Job Assignments</h1>

            <div className = "ordersbox">

                <div className = "ordersboxtabs">

                    <div
                    onClick = { () => setActiveTab('assign')}
                    className ={`ordersboxtab ${isInvActive}`} style = {{'flex' : 1, 'borderBottom' : 0}}>
                        Assign Job
                        {
                            jobs && jobs.filter( job => !job.employee).length > 0 &&
                            <div className="incomingordernotification incoming" style = {{'width' : '32px'}}>{jobs.filter( job => !job.employee).length}</div>
                        }
                    </div>

                    <div
                    onClick = { () => setActiveTab('active')}
                    className = {`ordersboxtab ${isCountActive}`} style = {{'flex' : 1, 'borderBottom' : 0}}>Active Jobs</div>

                    <div
                    onClick = { () => setActiveTab('roster')}
                    className = {`ordersboxtab ${isReplenishActive}`} style = {{'flex' : 1, 'borderBottom' : 0, 'borderRight' : 0}}>Employee Roster</div>

                </div>

            </div>

            {   activeTab === 'assign' &&
                <AssignJob setActiveTab = {setActiveTab}
                jobs = {jobs}
                employees = {employees}
                assign = {assign} />
            }

            {   activeTab === 'active' &&
                <ActiveJobs setActiveTab = {setActiveTab}
                jobs = {jobs.filter( job => job.employee)}
                employees = {employees} />
            }

            {   activeTab === 'roster' &&
                <Roster setActiveTab = {setActiveTab}
                employees = {employees} />
            }

        </div>
    )
}
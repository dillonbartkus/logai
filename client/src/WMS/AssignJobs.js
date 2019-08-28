import React, { useState } from 'react'
import AssignJob from './AssignJob'
import ActiveJobs from './ActiveJobs'
import Roster from './Roster'

export default function AssignJobs() {

    const [activeTab, setActiveTab] = useState('assign')

    const isInvActive = (activeTab === 'assign') ? 'active' : ''
    const isCountActive = (activeTab === 'active') ? 'active' : ''
    const isReplenishActive = (activeTab === 'roster') ? 'active' : ''   

    return(

        <div className = "assignjobs">

            <h1 className="bigheader">Job Assignment</h1>

            <div className = "ordersbox">

                <div className = "ordersboxtabs">

                    <div
                    onClick = { () => setActiveTab('assign')}
                    className ={`ordersboxtab ${isInvActive}`} style = {{'flex' : 1}}>Assign Job</div>

                    <div
                    onClick = { () => setActiveTab('active')}
                    className = {`ordersboxtab ${isCountActive}`} style = {{'flex' : 1}}>Active Jobs</div>

                    <div
                    onClick = { () => setActiveTab('roster')}
                    className = {`ordersboxtab ${isReplenishActive}`} style = {{'flex' : 1, 'borderRight' : 0}}>Employee Roster</div>

                </div>

            </div>

            {   activeTab === 'assign' &&
                <AssignJob setActiveTab = {setActiveTab} />
            }

            {   activeTab === 'active' &&
                <AssignJob setActiveTab = {setActiveTab} />
            }

            {   activeTab === 'roster' &&
                <AssignJob setActiveTab = {setActiveTab} />
            }

        </div>
    )
}
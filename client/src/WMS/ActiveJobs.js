import React from 'react'
import ActiveJob from './ActiveJob'

export default function ActiveJobs({ jobs }) {

    const renderJobs = () => {
        return jobs.map( (job, id) => <ActiveJob key = {id} id = {id + 1} job = {job} /> )
    }

    return(

        <div className = "activejobs">

            <div className = "activejobtitles">

                <div>Job #</div>
                <div>Job Type</div>
                <div>Order #</div>
                <div>Due Date</div>
                <div>Assigned Employee</div>
                <div></div>

            </div>

            <div className = "activejobs-box">

                {renderJobs()}
                <div className = "countitem"></div>
                <div className = "countitem gray"></div>
                <div className = "countitem"></div>
                <div className = "countitem gray"></div>

            </div>

        </div>
    )
}
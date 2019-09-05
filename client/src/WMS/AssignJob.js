import React, { useState } from 'react'
import AssignEmployee from './AssignEmployee'
import UnassignedJob from './UnassignedJob'

export default function AssignJob({ jobs, employees, assign }) {

    const [selectedEmp, setSelectedEmp] = useState()
    const [selectedJobs, setSelectedJobs] = useState([])
    const [clear, setClear] = useState(false)

    if (clear) setTimeout( () => setClear(false), 500 )    

    const renderEmployees = () => {
        if (employees) return employees.map( (emp, id) => <AssignEmployee employee = {emp} selected = {selectedEmp} select = {employeeSelect} jobs = {jobs} key = {id} id = {id} /> )
    }

    const renderJobs = () => {
        if (jobs) return jobs.filter( job => !job.employee )
        .map( (job, id) => <UnassignedJob clear = {clear} job = {job} select = {jobSelect} key = {id} id = {id} /> )
    }

    const employeeSelect = e => {
        setSelectedEmp(e)
    }

    const jobSelect = e => {        
        const {checked, value} = e.target        
        if (checked) {
            setSelectedJobs([...selectedJobs, value])
        }
        else {
            const remove = selectedJobs.indexOf(value)
            selectedJobs.splice(remove, 1)
          }
    }

    const assignEmployee = () => {
        if (selectedEmp && selectedJobs.length > 0) {
        assign(selectedEmp, selectedJobs)
        setSelectedEmp()
        setSelectedJobs([])
        setClear(true)
        }
    }

    return(

        <div className = "assignjob">

            <div className = "chooseemployee">

                <h3 style = {{'fontWeight' : 600, 'letterSpacing' : '1px'}}>Choose an Active Employee</h3>

                <div className = "chooseemployee-box">

                    <div className = "invitemtitles">

                        <div style = {{'width' : '35%', 'marginLeft' : '2%'}}>Name</div>
                        <div style = {{'width' : '30%'}}># Active Jobs</div>
                        <div style = {{'width' : '30%', 'marginRight' : '2%'}}>Top Performing Job</div>

                    </div>

                    {renderEmployees()}
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>

                </div>

            </div>

            <div className = "unassignedjobs">

                <h3 style = {{'fontWeight' : 600, 'letterSpacing' : '1px'}}>Select Unassigned Job(s)</h3>

                <div className = "choosejob-box">

                    <div className = "invitemtitles">

                        <div style = {{'flex' : 1, 'marginLeft' : '2%'}}>Job #</div>
                        <div style = {{'flex' : 1}}>Job Type</div>
                        <div style = {{'flex' : 1}}>Order #</div>
                        <div style = {{'flex' : 1}}>Due Date</div>
                        <button style = {{'flex' : 2}} className = "addajob">+ Add a Job</button>

                    </div>

                    {renderJobs()}
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>

                    </div>

            </div>

            <button
            className = "transportbutton"
            style = {{'width' : '22.5%', 'margin' : '3% auto', 'height' : '7vh'}}
            onClick = { () => assignEmployee() }
            >Assign</button>

        </div>
    )
}
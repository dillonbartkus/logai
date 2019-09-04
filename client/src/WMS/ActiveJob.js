import React from 'react'

export default function ActiveJob({ job, id }) {

    const style = (id % 2 === 1) ? { backgroundColor: '#EFEFEF' } : null
    console.log(job)
    
    let jobType
    if (job.status === 'active') jobType = 'Picking'
    if (job.status === 'receiving') jobType = 'Receiving'
    if (job.status === 'received') jobType = 'Put Away'
    if (job.status === 'picked') jobType = 'Packing'
    if (job.status === 'count') jobType = 'Counting'    

    return(

        <div className = "countitem" style = {style}>

            <div style = {{'marginLeft' : '2%'}}>{id}</div>
            <div>{jobType}</div>
            <div>{job.id}</div>
            <div>{job.actual_date}</div>
            <div>{job.employee}</div>
            <button className = "transportbutton"></button>
            
        </div>
    )
}
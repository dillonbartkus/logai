import React, { useEffect } from 'react'

export default function UnassignedJob({ job, id, select, clear }) {

    const style = (id % 2 === 1) ? { backgroundColor: '#EFEFEF' } : null
    const inputRef = React.createRef()

    let jobType
    if (job.status === 'active') jobType = 'Picking'
    if (job.status === 'receiving') jobType = 'Receiving'
    if (job.status === 'received') jobType = 'Put Away'
    if (job.status === 'picked') jobType = 'Packing'
    if (job.status === 'count') jobType = 'Counting'    

    useEffect( () => {
        if(clear) inputRef.current.reset()
    }, [clear] )

    return(

        <div className = "countitem" style = {style}>

            <div style = {{'flex' : 1, 'cursor' : 'pointer'}}>
                <form
                ref = {inputRef}
                >
                <input type = "checkbox"
                name = {job.id}
                value = {job.id}
                onChange = { e => select(e) }
                ></input>
                </form>
                <p style = {{'marginLeft' : '20%'}}>
                {id + 1}</p>
            </div>

            <div style = {{'flex' : 1}}>
                {jobType}
            </div>

            <div style = {{'flex' : 1}}>
                {job.id}
            </div>

            <div style = {{'flex' : 1}}>
                {job.actual_date}
            </div>

            <div style = {{'flex' : 2, 'margin' : '0 3%'}}></div>

        </div>
    )
}
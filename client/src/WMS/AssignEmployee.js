import React from 'react'

export default function Employee({ employee, id, jobs, select, selected }) {

    const style = (id % 2 === 1) ? { backgroundColor: '#EFEFEF' } : null
    const isSelected = (selected === employee.npc) ? true : false
    const numberOfJobs = jobs.filter( job => job.employee === employee.npc ).length

    return(

        <div className = "countitem" style = {style}>

            <div style = {{'width' : '40%', 'cursor' : 'pointer'}}
            onClick = { () => select(employee.npc) }
            >
                <input type = "radio"
                name = 'emp'
                value = {employee.npc}
                onChange = { e => select(e.target.value) }
                checked = {isSelected}
                ></input>
                {employee.npc}
            </div>

            <div style = {{'width' : '30%'}}>
                {numberOfJobs}
            </div>

            <div style = {{'width' : '30%'}}>
                Picking
            </div>

        </div>
    )
}
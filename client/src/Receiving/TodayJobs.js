import React from 'react'
import TodayJob from './TodayJob'

export default function TodayJobs({ orders, avatar, showOrder, user }) {

    return(

        <div className = "todayjobs">

            <div className = "employeeinfo">

                <img src = {avatar} alt = "employee" />

                <h2>{user.npc}</h2>
                <p>Picker</p>

            </div>

            <h1>Today's Jobs:</h1>

            <div className = "jobsbox">

            {
                orders &&
                orders.map( (order, id) => <TodayJob key = {id} number = {id + 1} showOrder = {showOrder} order = {order} /> )
            }

            </div>

        </div>

    )
}
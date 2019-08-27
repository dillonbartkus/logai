import React, { useState } from 'react'
import gear from '../images/gear.png'

export default function Count({ setActiveTab }) {

    const [type, setType] = useState('rank')

    return(

        <div className = "count">

            <div className = "counttype">

                <h3>Select Type:</h3>

                <div
                onClick = { () => setType('rank') }
                >
                    <input type="radio" readOnly checked = {type === 'rank' ? true : false} ></input>
                    <h3>Rank Based</h3>
                </div>

                <div
                onClick = { () => setType('random') }
                >
                    <input type="radio" readOnly checked = {type === 'random' ? true : false} ></input>
                    <h3>Random</h3>
                </div>

                <div
                onClick = { () => setType('geo') }
                >
                    <input type="radio" readOnly checked = {type === 'geo' ? true : false} ></input>
                    <h3>Geographic Selection</h3>
                </div>

                <div className = "countsettingsbutton"
                onClick = { () => setActiveTab('settings') }
                >
                    <img src = {gear} alt = '' />
                    <h3>Settings</h3>

                </div>

            </div>

            <div className = "duenow">
                <h3>Due Now</h3>
                <div>
                    <div className = "countitem">
                        <h3
                        onClick = { () => setActiveTab('count') }
                        >Cycle Count #10278</h3>
                    </div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                </div>
            </div>

            <div className = "nextcount">
                <h3>Next Count</h3>
                <div>
                    <div className = "countitem">
                        <h3
                        onClick = { () => setActiveTab('count') }
                        >Cycle Count #10279</h3>
                    </div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                </div>
            </div>

            <div className = "past">
                <h3>Past</h3>
                <div>
                    <div className = "countitem">
                        <h3
                        onClick = { () => setActiveTab('count') }
                        >Cycle Count #10277</h3>
                    </div>
                    <div className = "countitem gray">
                        <h3
                        onClick = { () => setActiveTab('count') }
                        >Cycle Count #10276</h3>
                    </div>
                    <div className = "countitem">
                        <h3
                        onClick = { () => setActiveTab('count') }
                        >Cycle Count #10275</h3>
                    </div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                    <div className = "countitem"></div>
                    <div className = "countitem gray"></div>
                </div>
            </div>

        </div>
    )
}
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Clients = props => {

    const [clientlist, setClientlist] = useState()

    useEffect( () => {
        fetchClients()
    }, [])

    const fetchClients = async () => {
        const res = await axios.post(`/getclientlist/${props.userData.id}`)        
        setClientlist(res.data.data)
    }

    const renderClients = () => {
        if (clientlist)
        return clientlist.map( client => {
            return (
                <div className = "client" key = {client.id}>
                <p>{client.name}</p>
                <p>{client.npc}</p>
                <p>{client.address}</p>
                <p>{client.email}</p>
                <p>{client.phone}</p>
                </div>
            )
        })
    }

    return (
        <div className = "clientlist">
        {renderClients()}
        </div>
    )
}

export default Clients
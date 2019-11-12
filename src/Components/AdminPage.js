import React from 'react'
import AllAriticle from '../CRUD/AllAriticle';
import { useHistory, useLocation } from 'react-router-dom'

function AdminPage() {
     
    let history = useHistory()
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    return (
        <div>  
            <AllAriticle></AllAriticle>
            </div>
    )
}

export default AdminPage

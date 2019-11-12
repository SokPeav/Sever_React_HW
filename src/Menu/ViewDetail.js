import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
export default class ViewDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = { 
             title :'',
             description :''
        }
    }
    componentDidMount()
    {
      let st = window.location.href
      let url = st.split("/")
      let id   = url[4]
      
      
        console.log(st);
        console.log("URL" + url);
        console.log(id);
        
        
        
        axios.get('http://www.api-ams.me/v1/api/articles/' + id)
        .then(res => {
            this.setState({
                title: res.data.DATA.TITLE,
                description: res.data.DATA.DESCRIPTION,
            })
        }).catch(e => console.log(e))
    }
    render() {
        return (
            <div class="card text-center container">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">{this.state.title}</h5>
              <p class="card-text">{this.state.description}</p>
              <Link to="/home" class="btn btn-primary">Go Home</Link>
         </div>
        </div>
        )
    }
}

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Detail extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             title:"",
             description :""
        }
    }
    
    componentDidMount()
    {
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
            
            <div class="card text-center">
            <div class="card-header">
              View Detail
            </div>
            <div class="card-body">
              <h5 class="card-title">Title : {this.state.title}</h5>
              <p class="card-text"> Description : {this.state.description}</p>
             
              <Link to="/admin" className="btn btn-primary btn-sm card-link ">Back to System</Link>
            </div>
          </div>
            
            )

    }
}

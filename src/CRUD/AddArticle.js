    import React from 'react'
    import 'bootstrap/dist/css/bootstrap.min.css';

    export default class AddArticle extends React.Component{
        constructor(props)
        {
            super(props)
            this.state = {
                id:'',
                title :'',
                description :'',    
            }
        }
        componentDidMount()
        {
                if(this.props.article)
                {
                    this.setState({
                        id:this.props.article.id,
                        title:this.props.article.title,
                        description:this.props.article.description,
                    })
                }
        }
        handleChange = event =>
        {
            this.setState({
                [event.target.name]:event.target.value
            })
        }
        handleSubmit = event =>
        {
        event.preventDefault()
            this.props.onSubmitArticle(this.state)
        }
        render()
        {
            return(
                <div >
                <form onSubmit={this.handleSubmit} className="form-group container">
                    <label>Input Title :</label>
                    <input type="text" class="form-control" name="title" value={this.state.title}onChange={this.handleChange}/>
                    <label>Input Description :</label>
                    <input type="text" class="form-control" name="description" value={this.state.description}onChange={this.handleChange}/>
                    <button type="submit" class="btn btn-primary">Click Add</button>   
                </form>
                </div>
            
    
            )
        }
    }
import React from 'react'
import { Link } from 'react-router-dom'

class BadgeForm extends React.Component {
    /* state = {
        jobtitle: 'Designeer'
    } */

    /*handleChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.value})
        this.setState({
            [e.target.name]: e.target.value
        })
    }*/

    handleClick = (e) => {
        console.log('Button was click')
    }

    /*handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form was submit')
        console.log(this.state)
    }*/

    render() {
        return(
            <div>
                <form onSubmit={this.props.onSubmit} action="">
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    <Link to={'/badges'} className="btn btn-secondary">Cancel</Link>

                    {this.props.error && <div class="alert alert-danger" role="alert">{this.props.error.message}</div>}
                </form>
            </div>
        )
    }
}

export default BadgeForm
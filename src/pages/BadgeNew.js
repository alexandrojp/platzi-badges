import React from 'react'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import PageLoading from '../components/PageLoading'

class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    }

    handleChange = (e) => {

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        console.log('Form submit')
        this.setState({ loading: true, error: null })
        try {
            /*const newForm = {
                ...this.state.form,
                avatarUrl: `https://www.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon`
            }*/
            await api.badges.create(this.state.form)
            this.setState({ loading: false, error: null })

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading></PageLoading>
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName || 'FIRSTNAME'}
                                lastName={this.state.form.lastName || 'LASTNAME'}
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'} />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;
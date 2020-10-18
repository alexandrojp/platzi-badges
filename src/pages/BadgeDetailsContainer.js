import React from 'react'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'
import BadgeDetails from './BadgeDetails'

class BadgeDetailContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        modalIsOpen: false,
        data: undefined
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleOpenModal = (e) => {
        this.setState({modalIsOpen: true})
    }

    handleCloseModal = (e) => {
        this.setState({modalIsOpen: false})
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        return (
            <BadgeDetails 
                badge={this.state.data} 
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen} 
            />
        )
    }
}

export default BadgeDetailContainer
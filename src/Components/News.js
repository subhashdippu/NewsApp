import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=843746d56f8a4018a7f351d14bded79f&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            loading: false
        })
        console.log(parsedData)
    }
    handleLeftButton = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=843746d56f8a4018a7f351d14bded79f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }
    handleRightButton = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=843746d56f8a4018a7f351d14bded79f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        })
    }
    render() {

        return (
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center my-4 '>News Application</h1>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className='col-md-4'>
                                <NewsItems title={element.title} desc={element.description} imageUrl={element.urlToImage} />
                            </div >
                        )
                    })}

                </div>
                {this.state.loading && <Spinner className="justify-center" />}
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-primary' disabled={this.state.page <= 1} onClick={this.handleLeftButton}>&larr;</button>
                    <button className='btn btn-primary' onClick={this.handleRightButton}>&rarr;</button>
                </div>
            </div>
        )
    }
}

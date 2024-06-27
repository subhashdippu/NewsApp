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

    update = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=843746d56f8a4018a7f351d14bded79f&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            loading: false
        })
        console.log(parsedData)
    }
    async componentDidMount() {
        this.update()
    }
    handleLeftButton = async () => {
        await this.setState({
            page: this.state.page - 1
        })
        await this.update()
    }
    handleRightButton = async () => {
        await this.setState({
            page: this.state.page + 1
        })
        await this.update()
    }
    render() {

        return (
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center my-4 '>News Application</h1>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className='col-md-4'>
                                <NewsItems title={element.title} desc={element.description} author={element.author} imageUrl={element.urlToImage} date={element.publishedAt} />
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

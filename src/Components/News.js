import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=843746d56f8a4018a7f351d14bded79f&page=1"
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles
        })
        console.log(parsedData)
    }
    handleLeftButton = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=843746d56f8a4018a7f351d14bded79f&page=${this.state.page - 1}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            page: this.page - 1
        })
    }
    handleRightButton = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=843746d56f8a4018a7f351d14bded79f&page=${this.state.page + 1}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            page: this.page + 1
        })
    }
    render() {

        return (
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center my-4 '>News Application</h1>
                    {this.state.articles.map((element) => {
                        return (
                            <div className='col-md-4'>
                                <NewsItems title={element.title} desc={element.description} imageUrl={element.urlToImage} />
                            </div >
                        )
                    })}

                </div>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-primary' onClick={this.handleLeftButton}>&larr;</button>
                    <button className='btn btn-primary' onClick={this.handleRightButton}>&rarr;</button>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=843746d56f8a4018a7f351d14bded79f"
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles
        })
        console.log(parsedData)
    }
    render() {

        return (
            <div>
                <div className='row'>
                    <h1>News Application</h1>
                    {this.state.articles.map((element) => {
                        return (
                            <div className='col-md-4'>
                                <NewsItems title={element.title} desc={element.description} imageUrl={element.urlToImage} />
                            </div >
                        )
                    })}

                    {/* <div className='col-md-4'>
                        <NewsItems />
                    </div>
                    <div className='col-md-4'>
                        <NewsItems />
                    </div>
                    <div className='col-md-4'>
                        <NewsItems />
                    </div> */}

                </div>

            </div>
        )
    }
}

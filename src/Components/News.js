import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    Capitalization = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
        document.title = `${this.Capitalization(this.props.category)} - NewsApp`
    }

    update = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=843746d56f8a4018a7f351d14bded79f&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            loading: false,
            totalResults: parsedData.totalResults,
        });
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
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=843746d56f8a4018a7f351d14bded79f&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        });
    };
    render() {

        return (
            <div className='container'>
                <h1 className='text-center my-4 '>
                    News Application
                </h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles !== this.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container'>

                        <div className='row'>
                            {!this.state.loading && this.state.articles.map((element) => {
                                return (
                                    <div className='col-md-4' key={element.url}>
                                        <NewsItems title={element.title} desc={element.description} author={element.author} imageUrl={element.urlToImage} date={element.publishedAt} source={element.source.name} />
                                    </div >
                                )
                            })}
                        </div>
                    </div>


                </InfiniteScroll >
            </div >
        )
    }
}

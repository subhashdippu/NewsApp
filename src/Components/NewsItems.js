import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let { desc, imageUrl, title, author, date } = this.props
        return (
            <div>
                <div class="card" style={{ width: "25rem" }}>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                        <span class="visually-hidden">unread messages</span>
                    </span>
                    <img src={!imageUrl ? "https://t4.ftcdn.net/jpg/02/09/53/11/360_F_209531103_vL5MaF5fWcdpVcXk5yREBk3KMcXE0X7m.jpg" : imageUrl} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{desc} </p>
                        <p class="card-text">
                            <small className='text-muted'>
                                By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
                            </small>
                        </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

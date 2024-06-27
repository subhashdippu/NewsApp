import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let { desc, imageUrl, title } = this.props
        return (
            <div>
                <div class="card" style={{ width: "25rem" }}>
                    <img src={imageUrl} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{desc}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

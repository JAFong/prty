import React, { Component } from 'react';

class MemberProfile extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const categories = [];
        for (var category in this.props.categories) {
            let count = 0
            categories.push(
                <div key={count}>
                    <div>{category}</div>
                    <div>{this.props.categories[category]}</div>
                </div>
            )
            count++
        }
        return (
            <div>
                {categories}
            </div>
        )
    }
}

export default MemberProfile


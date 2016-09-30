import React, { Component } from 'react';
import MemberProfile from '../Member/memberProfile.js';

class Team extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const members = this.props.members.map((member, index) => {
            return (
                <MemberProfile
                    name={member.name}
                    categories={member.categories}
                    key={index}
                />
            )
        })
        return (
            <div>
               {members} 
            </div>
        )
    }
}

export default Team
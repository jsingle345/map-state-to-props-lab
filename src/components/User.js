import React from 'react'

export default function User(props) {
    return (
        <li>{props.user.username} from {props.user.hometown}</li>
    )
}

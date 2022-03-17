import './UserProfile.css'
import Header from './Header'
import BoardGrid from '../BoardGrid'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function UserProfile() {
    const user = useSelector(state => state?.session?.user)
    return (
        <div id="userProfile">
            <Header user={user} />
            <div id="pageChanger"></div>
            <BoardGrid />

        </div>

    )
}
import React from 'react'
import { Outlet } from 'react-router-dom'

const Messages = () => {
  return (
    <>
        <h1>Messages</h1>
        <Outlet />
    </>
  )
}

export default Messages
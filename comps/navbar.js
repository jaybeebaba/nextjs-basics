import React from 'react'
import Link from "next/link"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <h1>Albums</h1>
        </div>

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/albums">Albums list</Link>
        
    </nav>
  )
}

export default Navbar
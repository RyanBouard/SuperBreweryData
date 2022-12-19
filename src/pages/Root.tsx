import React from 'react';
import { NavLink, Outlet } from "react-router-dom"
import '../style/Root.scss'

const Root = () => {
    return (
        <>
            <header className='main-header'>
                <h1 className='main-header--title'>Super Brewery Data</h1>
                <nav className='main-header--nav' data-testid="mainNav">
                    <NavLink className='main-header--nav--link' to={``}>Accueil</NavLink>
                    <NavLink className='main-header--nav--link' to={`explore`}>Brasseries</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Root
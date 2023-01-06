import React from 'react';
import NotFoundIcon from '../components/icons/NotFoundIcon';
import NavLink from "../components/button/NavLink";

function NotFoundPage() {

    return (
        <React.Fragment style={{ textAlign: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 className='notFoundTitle'>404</h1>
                <h3 className='notFoundDescription'>Page not found</h3>
                <NotFoundIcon />
                <NavLink to='/'>
                    <button className='notFoundButton'>
                        Go to home page
                    </button>
                </NavLink>
            </div>
        </React.Fragment>
    );
}

export default NotFoundPage;
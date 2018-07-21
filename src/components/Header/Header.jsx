import './Header.scss';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';

const Header = (props) => {
    const { location: { pathname } } = props;
    return (
        <div className="it-header-wrap">
            <h3>
                <Link
                    to="/"
                    className={`it-header-link ${pathname === '/' && 'active'}`}
                >
                    Preview Page
                </Link>
            </h3>
            <h1>Header</h1>
            <h3>
                <Link
                    to="/admin"
                    className={`it-header-link ${pathname === '/admin' && 'active'}`}
                >
                    Admin Page
                </Link>
            </h3>
        </div>
    );
};

export default withRouter(Header);

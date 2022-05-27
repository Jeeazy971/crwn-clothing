import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CardIcon from '../components/card-icon/card-icon.component';
import CardDropdown from '../components/card-dropdown/card-dropdown.component';

import { ReactComponent as CrwnLogo } from '../assets/crown.svg';

import { UserContext } from '../contexts/user.context';
import { CartContext } from '../contexts/cart-context';

import { signOutUser } from '../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Boutique
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>
                            Déconnexion
                        </span>
                    ) : (
                        <Link className="nav-link" to="/auth">
                            Connexion
                        </Link>
                    )}
                    <CardIcon />
                </div>
                {isCartOpen && <CardDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;

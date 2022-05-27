import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './card-dropdown.styles.scss';

const CardDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">Votre panier est vide</span>
                )}
            </div>

            <Button>payer</Button>
        </div>
    );
};

export default CardDropdown;

import { NavLink } from "react-router-dom";
import CartIcon from "../components/cart/cart-icon.component";
import CartDropDown from "../components/cart/cart-dropdown.component";
import { signOutUser } from "../utils/firebase.utils";
import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../store/cart/cart.selector";

const Header = () => {
  const currentUser = useSelector((s) => s.user.currentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleSignOut = async () => {
    await signOutUser();
  };

  return (
    <header className="flex justify-between items-center py-6">
      <div className="text-2xl font-medium">
        <NavLink to="/" className="">
          Logo
        </NavLink>
      </div>
      <nav>
        <ul className="flex justify-between items-center text-xl font-medium">
          <li className="px-4">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="px-4">
            <NavLink>Contact</NavLink>
          </li>
          <li className="px-4">
            <NavLink>About Us</NavLink>
          </li>
          <li className="px-4">
            {currentUser ? (
              <NavLink onClick={() => handleSignOut()}>Sign Out</NavLink>
            ) : (
              <NavLink to="/auth">Sign In</NavLink>
            )}
          </li>
          <li className="px-4">
            <CartIcon />
          </li>
        </ul>
        {isCartOpen && <CartDropDown />}
      </nav>
    </header>
  );
};

export default Header;

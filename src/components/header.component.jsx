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
        <ul className="flex justify-between items-center">
          <li className="px-4 text-2xl font-medium">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="px-4 text-2xl font-medium">
            <NavLink>Contact</NavLink>
          </li>
          <li className="px-4 text-2xl font-medium">
            <NavLink>About Us</NavLink>
          </li>
          <li className="px-4 text-2xl font-medium">
            {currentUser ? (
              <NavLink onClick={() => handleSignOut()}>Sign Out</NavLink>
            ) : (
              <NavLink to="/sign-in">Sign In</NavLink>
            )}
          </li>
          <li className="px-4 text-2xl font-medium">
            <CartIcon />
          </li>
        </ul>
        {isCartOpen && <CartDropDown />}
      </nav>
    </header>
  );
};

export default Header;

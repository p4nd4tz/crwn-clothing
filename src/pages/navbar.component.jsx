import { NavLink, Outlet } from "react-router-dom";
import Container from '../components/container.component';
import CartIcon from "../components/cart/cart-icon.component";
import { useUserContext } from '../context/user.context';
import { useCart } from '../context/cart.context';
import { signOutUser } from "../utils/firebase.utils";
import CartDropDown from "../components/cart/cart-dropdown.component";

const Navbar = () => {
    const { currentUser } = useUserContext();
    const { isCartOpen } = useCart();

    const handleSignOut = async () => {
        await signOutUser();
    }

    return (
        <div className="">
            <div className="bg-slate-50">
                <Container>
                    <header className="flex justify-between items-center py-6">
                        <div className="text-2xl font-medium">
                            <NavLink to="/" className="">Logo</NavLink>
                        </div>
                        <nav>
                            <ul className="flex justify-between items-center">
                                <li className="px-4 text-2xl font-medium"><NavLink to="/shop">Shop</NavLink></li>
                                <li className="px-4 text-2xl font-medium"><NavLink>Contact</NavLink></li>
                                <li className="px-4 text-2xl font-medium"><NavLink>About Us</NavLink></li>
                                <li className="px-4 text-2xl font-medium">
                                    {
                                        currentUser
                                            ? (<NavLink onClick={() => handleSignOut()}>Sign Out</NavLink>)
                                            : (<NavLink to="/sign-in">Sign In</NavLink>)
                                    }
                                </li>
                                <li className="px-4 text-2xl font-medium"><CartIcon /></li>
                            </ul>
                            {isCartOpen && <CartDropDown />}
                        </nav>
                    </header>
                </Container>

            </div>
            <main className="mt-8">
                <Container>
                    <Outlet />
                </Container>
            </main>
        </div >
    )
}

export default Navbar;
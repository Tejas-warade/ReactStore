import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import Menu from "./Menu/Menu";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const { cartCount, showCart, setShowCart } = useContext(Context);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
            <FaBars />
          </button>
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/collections")}>Collections</li>
            <li onClick={() => navigate("/contact")}>Contact Us</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            REACTSTORE.
          </div>
          <div className="right">
            <TbSearch onClick={() => setSearchModal(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {searchModal && <Search setSearchModal={setSearchModal} />}
      {showCart && <Cart />}
      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </>
  );
};

export default Header;

import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.module.css"
import Logo from "./assets/sony-logo-white-1.webp"

export default function NavBar() {
  return (
    <nav>
      <img src={Logo} alt="" />
      <div className="NavBar-container">
        <button>Home</button>
        <button>Camaras</button>
        <button>Objetivos</button>
        <button>Accesorios</button>
      </div>
      <CartWidget />
    </nav>
  )
}

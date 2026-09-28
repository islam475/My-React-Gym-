import { Link } from "react-router-dom"
import "./header.css"
import Button from "../Button/Button"
function Header() {
  return (
    <>
    <div className="container">
        <nav>
            <h1><Link className="my-link" to='/'>My React Gym</Link></h1>
            <ul>
                <li><a  href="#"> Home</a></li>
                <li><Link to="/src/components/Pages/About.jsx" >About</Link> </li>                <li><a href="#"> Contact Us</a></li>
                <li><a href="#"> Plans</a></li>
            </ul>
                <Button text="Login"/>
        </nav>
    </div>
    </>
  )
}

export default Header
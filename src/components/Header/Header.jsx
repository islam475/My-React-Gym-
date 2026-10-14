import { Link } from "react-router-dom"
import "./header.css"
import Button from "../Button/Button"
function Header() {
  return (
    <>
    <header className="header">
    <div className="container">
        <nav>
            <h1><Link className="my-link" to='/'>My React Gym</Link></h1>
            <ul>
                <li><a  href="#about"> Home</a></li>
                <li><Link to="#about" >About</Link> </li>  
                <li><a href="#"> Contact Us</a></li>
                <li><a href="#"> Plans</a></li>
            </ul>
                <Button text="Login"/>
        </nav>
    </div>
    </header>
    </>
  )
}

export default Header
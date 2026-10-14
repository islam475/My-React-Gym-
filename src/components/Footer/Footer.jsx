import './footer.css'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <footer className='footer'>
      <h1><Link className="my-link" to='/'>My React Gym</Link></h1>
          <ul>
              <li><a  href="#about"> Home</a></li>
              <li><Link to="#about" >About</Link> </li>  
              <li><a href="#"> Contact Us</a></li>
              <li><a href="#"> Plans</a></li>
          </ul>
        <p> © copy right 2026 </p>
    </footer>

    </>
  )
}

export default Footer
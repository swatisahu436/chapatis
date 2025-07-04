import { Link } from "react-router-dom";
const Header=()=>{
  return(
<header className="header">
  <div className="logo">
    <h1>GrainWise</h1>
    <br/>
    <h4>Tortilla</h4>
  </div>
  <nav className="navheader">
    <ul className="navlink">
      <li><Link to ="/">Home</Link></li>
      <li><Link to="/sustainbility">Sustainbility</Link></li>
      <li><Link>Our Product</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </ul>

  </nav>

</header>
  )
}
export default Header;
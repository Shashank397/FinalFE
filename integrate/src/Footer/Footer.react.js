import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

export const Footer = () => {
    return(
<div>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom row">
<div className="col-sm-10">
<ul className="navbar-nav">
<li className="nav-item">
<a className="nav-link active" href="/"><i className="fa fa-home"></i>Home</a>
</li>
{/* <li>
<Link className="nav-link active" to='/registerdonor'>Register as Donor</Link></li>
<li><Link className="nav-link active" to='/registerpatient'>Register as Patient</Link></li> */}

</ul>
</div>
</nav>
</div>
    )
}
export default Footer;
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap';
// import './Footer.css';

// const Footer = () => {

//     return (
// 		<div>
// 		{/* <nav class="navbar footer-distributed fixed-bottom"> */}
//         <nav class="navbar abc phantom navbar-dark bg-light fixed-bottom">

// 			<div class="footer-left">

// 				<h3>Veri<span>Life</span></h3>

// 				<p class="footer-links">
// 					.
// 					<a href="#">Home</a><br></br>
// 					·
// 					<a href="#">Blood Banks</a><br></br>
// 					·
// 					<a href="#">Donation Camp</a><br></br>
// 					·
// 					<a href="#">About</a><br></br>
// 					·
// 					<a href="#">Login</a><br></br>
// 					·
// 					<a href="#">Contact</a><br></br>
// 				</p>

// 				<p class="footer-company-name">Verizon India &copy; 2019</p>
// 			</div>

// 			<div class="footer-center">
            
// 			<p>
// 			    <span>Contact Us</span>
// 				</p>
				
// 				<div>
// 					<i class="fa fa-map-marker"></i>
// 					<p><span> SIDCO Industrial Estate, Guindy</span>Chennai, Tamil Nadu 600032</p>
// 				</div>

// 				<div>
// 					<i class="fa fa-phone"></i>
// 					<p>8056266354</p>
// 				</div>

// 				<div>
// 					<i class="fa fa-envelope"></i>
// 					<p><a href="mailto:support@company.com">verilife@verizon.com</a></p>
// 				</div>

// 			</div>

// 			<div class="footer-right">

// 				<p class="footer-company-about">
// 					<span>About Us</span>
// 					VeriLife is Blood Bank Management System (BBMS) which aims to provide transparency in making the process of obtaining blood from a blood bank hassle free and corruption free and make the system of blood bank management effective.
					
// 				</p>

// 				<div class="footer-icons">

// 					<a href="#"><i class="fa fa-facebook"></i></a>
// 					<a href="#"><i class="fa fa-twitter"></i></a>
// 					<a href="#"><i class="fa fa-linkedin"></i></a>
// 					<a href="#"><i class="fa fa-github"></i></a>

// 				</div>

// 			</div>

// 		</nav>
// 		</div>
//     );

// }

// export default Footer;
import AcuraLogo from '../images/acura logo.png'
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <div id='allMain'>
            <header id='header'>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <Link to='/'>
                        <img src={AcuraLogo} alt="" />
                        </Link>
                        <p>VEHICLES</p>
                        <p>SHOP</p>
                        <p>OUR STORY</p>
                    </div>



                    <div className="nav-links">

                        <Link to='/signUp'>
                        <p>Sign UP</p>
                        </Link>

                        <Link to='/signIn'>
                        <p>Sign IN</p>
                        </Link>
                        
                        
                        <Link to='/listProduct'>
                            <p>List</p>
                        </Link>

                        <Link to='/addProduct'>
                        <p>Admin</p>
                        </Link>

                    </div>
                </div>
            </div>

            </header>

            <section id='section'>
                <div className="element">
                    <img src="" alt="" />
                    <div className="section-text">
                        <h1>THE ALL-ELECTRIC ZDX</h1>
                        <p>Purchase or lease the first-ever, all-electric ZDX online today. $8500 federal tax credit available for eligible buyers.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;
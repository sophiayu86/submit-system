import tpa_logo from '../img/tpa_logo.png';
function Header({text}) {
    return ( 
        <header className="text-align-center mt-5">
        <a href="/">
        <img src={tpa_logo} className="logo me-4" alt="tpa_logo" />
        {text}</a>
      </header>
     );
}

export default Header;
import tpa_logo from '../img/tpa_logo.png'
function Nav() {
    return ( 
        <nav className='d-flex align-items-center fixed-top bg-light'>
          <a href="/" className='me-auto'> <img src={tpa_logo} className="logo me-4" alt="tpa_logo" />2020 臺灣心理學年會 </a>  
          <a href="/form">投稿</a>
          <a href="#contact" className='ms-3'>聯絡我們</a>
        </nav>
         
     );
}

export default Nav;
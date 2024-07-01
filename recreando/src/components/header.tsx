import '../styles/header.css';
function Header() {
  return (
    <header>
      <div className="Logo">
        <h1 className='text'>Recreando</h1>
        <button className='button-login'>
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
import '../styles/sideBar.css';

function SideBar() {
  return (
    <div className="containnerSide">
      <nav>
        <button className='button-sidebar'>3 a 6 anos</button>
        <button className='button-sidebar'>7 a 12 anos</button>
        <button className='button-sidebar'>Adolescentes</button>
        <button className='button-sidebar'>Adultos</button>
        <button className='button-sidebar'>Oficinas</button>
      </nav>
    </div>
  );
}

export default SideBar;
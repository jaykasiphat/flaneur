import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="world logo" className="logo--img" />
      <span className="logo--name">flaneur.</span>
    </header>
  );
}

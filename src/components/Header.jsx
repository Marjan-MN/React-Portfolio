// Heather component and inport logo
import logo from "../assets/Frame-1.png";
export default function Header() {
  return (
    <>
      <div className="main-header">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
    </>
  );
}

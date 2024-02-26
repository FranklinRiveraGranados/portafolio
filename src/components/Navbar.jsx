import "../styles/Navbar.css"
import logo from "/logo.png"
import menu from "/menu.png"
import close from "/close.png"
import { useState, useEffect } from "react"
import { navlinks } from "../constants"

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 900) {
        setShow(true);
      }else{
        setShow(false)
        setOpen(true)
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpen = () => {
    setOpen(!open)
  }
  const handlehidden = () => {
    if(open && show){
      setOpen(false)
    }
  }
  
  return (
    <div className="container-navbar">
      <div className="navbar">
      <div className="responsive">
        <div className="navbar-left">
          <img src={logo} />
          <div>
            <div className="name">Franklin Rivera</div>
            <div className="profesion">Software Developer</div>
          </div>
        </div>
        {show ? open ? <img src={close} alt="" onClick={()=>handleOpen()} /> : <img src={menu} alt="" onClick={()=>handleOpen()}/> : ""}
      </div>
      {
        open && 
        <ul>
        {
          navlinks.map((nav, i) => {
            return(
              <li key={i} onClick={()=>handlehidden()}>
                <a href={nav.link}>
                  {nav.name}
                </a>
              </li>
            )
          })
        }
      </ul>
      }
      </div>
    </div>
  );
}

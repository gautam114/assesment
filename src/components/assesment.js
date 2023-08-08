import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyAssesment } from "./myAssesment";
import {DesktopSidebar, Sidebar} from "./sidebar";
import Nav from 'react-bootstrap/Nav';
import { faBars, faHamburger, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export const Assesment=()=>{
     const drawerRef=useRef();
    const toggleDrawer=()=>{
       drawerRef.current();
    };
    return(
        <div className="assesment">
            
         <DesktopSidebar/>
         <Sidebar drawerRef={drawerRef}/>
         <div className="assesment-body">
            <div className="topbar mobile-sidebar">
                <FontAwesomeIcon icon={faBars} onClick={toggleDrawer}/>
            </div>
              <div className="tabs">
                 <Nav variant="underline" defaultActiveKey="/">
                 <Nav.Item className="">
                    <Nav.Link >Assesment</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link href="/" >My Assesments</Nav.Link>
                    <div className="line"></div>
                </Nav.Item>
                </Nav>
              </div>
         <div>
            <MyAssesment/>
         </div>
         </div>
        

        </div>
    )
}
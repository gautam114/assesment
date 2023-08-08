 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//  import } from '@fortawesome/free-regular-svg-icons';
 import {faDashboard, faFilePen, faNoteSticky, faNotesMedical, faObjectGroup} from '@fortawesome/free-solid-svg-icons';
 import React, { useEffect } from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css';


export const DesktopSidebar=()=>{
    return(
        <div className="desktop-sidebar my-assesment-overview">
            <ul className="sidebar-list">
            <li className=''>
               <div>
               <FontAwesomeIcon className='icon' icon={faDashboard}/>
               </div>
                 Dashboard
            </li>
            <li className='active-list'>
               <div>
               <FontAwesomeIcon className='icon' icon={faFilePen}/>
               </div>
                 Assesment
            </li>
            <li>
               <div>
               <FontAwesomeIcon className='icon' icon={faNotesMedical}/>
               </div>
                 My Library
            </li>
            </ul>
        </div>
    )
}











export const Sidebar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    };
    useEffect(()=>{
        props.drawerRef.current = toggleDrawer
    },[]);

    return (
        // m
        <div className='mobile-sidebar'>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
            <div className="desktop-sidebar ">
            <ul className="sidebar-list">
            <li className='d-md-block d-flex justify-content-center align-items-center'>
               
               <FontAwesomeIcon className='icon d-inline mt-sm-5' icon={faDashboard}  />
                &nbsp;
                Dashboard
            </li>
            <li className='active-list '>
               
               <FontAwesomeIcon className='icon' icon={faFilePen}/>
               
                 Assesment
            </li>
            <li className='d-md-block d-flex justify-content-center align-items-center'>
               
               <FontAwesomeIcon className='icon' icon={faNotesMedical}/>
               
                 My Library
            </li>
            </ul>
           </div>
            </Drawer>
        </div>
    )
};


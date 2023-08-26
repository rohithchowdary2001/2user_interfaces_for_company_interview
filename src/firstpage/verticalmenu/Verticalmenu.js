import React from "react";
import Verticalmenu from '../verticalmenu/Verticalmenu.css';
import { CiBrightnessUp } from 'react-icons/ci';
import { VscTwitter } from 'react-icons/vsc';
import { GoInbox } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';
import { VscGraph } from 'react-icons/vsc';
import { FcStatistics } from 'react-icons/fc';
import { LiaBrushSolid } from 'react-icons/lia';
import { FiSettings } from 'react-icons/fi';
const Vermenu = () => {

    return (
        <div className="container">
            <div className="logo">
            <VscTwitter size={30} />
            </div>
            <div className="line"/>
            <div className="menuitems">
            <GoInbox size={20} style={{marginTop:30}}/>
            <FiUsers size={20} style={{marginTop:20}}/>
            <VscGraph size={20} style={{marginTop:20}}/>
            <FcStatistics size={20} style={{marginTop:20}}/>
            <LiaBrushSolid size={20} style={{marginTop:20}}/>
            <FiSettings size={20} style={{marginTop:20}}/>
            </div>
        </div>
    );
};
export default Vermenu;
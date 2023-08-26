import React from 'react';
import Rightcontentt from "./Rightcontentt.css";
import meeting1 from "./meeting1.avif";
import schedule1 from './schedule1.jpg';
import schedule2 from './schedule2.jpeg';
import schedule3 from './schedule3.jpg';


import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
    return <Grow {...props} />;
}

function Rightcontent() {

    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
    });

    const handleClick = (Transition) => () => {
        setState({
            open: true,
            Transition,
        });
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };
    return (
        <div className='rightfulldata'>
            <div className='righttoppart'>
                <img src={meeting1} className="App-logo" alt="logo" />
                <div style={{ margin: "5px 0px 25px 10px" }}><b>Suggested sessions</b></div>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 10px 0px 10px" }}>
                    <div style={{ display: "grid" }}>
                        <div><b>Mock INterview</b> </div>
                        <div style={{ fontSize: "x-small" }}>24th august, 2022</div>
                        <div><b>(9:00AM-11:00AM)</b></div>
                    </div>

                    <Button onClick={handleClick(SlideTransition)} style={{ backgroundColor: "#ffa366", width: "90px", height: "40px", fontSize: "12px",color:'black' }}>ENROLL NOW</Button>
                    <Snackbar
                        open={state.open}
                        onClose={handleClose}
                        TransitionComponent={state.Transition}
                        message="Meeting is full please try again"
                        key={state.Transition.name}
                    />
                </div>
                <div className='linemeetings' />
                <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 10px 0px 10px" }}>
                    <div style={{ display: "grid" }}>
                        <div><b>Mock INterview</b> </div>
                        <div style={{ fontSize: "x-small" }}>24th august, 2022</div>
                        <div><b>(9:00AM-11:00AM)</b></div>
                    </div>

                    <Button onClick={handleClick(SlideTransition)} style={{ backgroundColor: "#ffa366", width: "90px", height: "40px", fontSize: "12px" ,color:'black'}}>ENROLL NOW</Button>
                    <Snackbar
                        open={state.open}
                        onClose={handleClose}
                        TransitionComponent={state.Transition}
                        message="Meeting is full please try again"
                        key={state.Transition.name}
                    />                </div>
                <div className='linemeetings' />
                <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 10px 0px 10px" }}>
                    <div style={{ display: "grid" }}>
                        <div><b>Mock INterview</b> </div>
                        <div style={{ fontSize: "x-small" }}>24th august, 2022</div>
                        <div><b>(9:00AM-11:00AM)</b></div>
                    </div>

                    <Button onClick={handleClick(SlideTransition)} style={{ backgroundColor: "#ffa366", width: "90px", height: "40px", fontSize: "12px",color:'black' }}>ENROLL NOW</Button>
                    <Snackbar
                        open={state.open}
                        onClose={handleClose}
                        TransitionComponent={state.Transition}
                        message="Meeting is full please try again"
                        key={state.Transition.name}
                    />                </div>
            </div>





            <div style={{ marginTop: "30px" }}>
                <h2>Upcoming Events</h2>
                <div className='downrightdata'>
                    <img src={schedule1} className="App-logooo" alt="logo" style={{marginTop:"15px",borderRadius:"10px"}}/>
                    <div style={{ display: "flex" }}>
                        <div className='corneredbox' />
                        <div className='dataofevents'>
                            <div><b>Portifolio Presentation</b></div>
                            <div>Tommarow</div>
                            <div><b>9:00AM-11:00AM</b></div>
                        </div>
                    </div>
                </div>
                <div className='downrightdata'>
                    <img src={schedule2} className="App-logooo" alt="logo" style={{marginTop:"15px",borderRadius:"10px"}}/>
                    <div style={{ display: "flex" }}>
                        <div className='corneredbox' />
                        <div className='dataofevents'>
                            <div><b>Group Discussion</b></div>
                            <div>Tommarow</div>
                            <div><b>9:00AM-11:00AM</b></div>
                        </div>
                    </div>
                </div>
                <div className='downrightdata'>
                    <img src={schedule3} className="App-logooo" alt="logo" style={{marginTop:"15px",borderRadius:"10px"}}/>
                    <div style={{ display: "flex" }}>
                        <div className='corneredbox' />
                        <div className='dataofevents'>
                            <div><b>Mock Interview Session 1</b></div>
                            <div>Tommarow</div>
                            <div><b>9:00AM-11:00AM</b></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rightcontent;
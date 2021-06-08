import React from 'react';

export const Leftpart = () => (
    <div className="left-background">
        <div className="upperleft">
            <button className="button-left-top">B</button>
            <div className="profile">
                <img src="/images/name.jpg" alt="" />
                <div className="profile-details">
                    <h3>Anand Agrawal</h3>
                    <p>anandagrawal.com</p>
                </div>

            </div>

        </div>
        <div className="middleleft">
            <h4 className="middleleft-active">Motivation</h4>
            <div className="middleleft-middle">
                <h4 className="middleleft-noactiveh">Productivity</h4>
                <button className="button-left-middle">New item</button>
            </div>
            <h4 className="middleleft-noactive">Design</h4>
            <h4 className="middleleft-noactive">Study</h4>

        </div>
        <div className="bottomleft">
            <div className="bottom-left-content">
            <img src="/images/rocket1.png" alt="" />
            <div className="bottomleft-upperpart">
              <h4 className="bottomleft-upperpart-title">Pro account is more powerful. Get 30% off</h4>
              <button className="button-bottom-middle">Go pro</button>
            </div>
            </div>
            
           

        </div>
        <div className="footer">
            <a className="footer-link" href="#"> Logout</a>
            <button className="bottom-left-button">+</button>
        </div>


    </div>

)
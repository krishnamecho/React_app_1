import React from 'react';
import { NavLink } from 'react-router-dom';
import Wabble from './Wabble';


const Common = ({heading1, strongHead, buttonTitle, imgSrc, visitSrc}) => {
    return (
        <>
            <section id="header" className="d-flex align-item-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1> {heading1}
                                    <strong className="brand-name"> {strongHead}</strong> </h1>
                                    <h2 className="my-3"> We are talented developers </h2>
                                    <div className="mt-3">
                                        <NavLink to={visitSrc} className="btn-get-started">{buttonTitle}</NavLink>
                                    </div>
                                    <Wabble />
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={imgSrc} className="img-fluid animated" alt="Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;
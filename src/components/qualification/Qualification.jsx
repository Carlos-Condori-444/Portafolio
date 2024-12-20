import { useState } from "react";
import "./qualification.css";

export const Qualification = () => {
    const [toggleState,seToggleState] = useState(1);

    const toggleTab = (index) => {
        seToggleState(index)
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Trayectoria Profesional</h2>
            <span className="section__subtitle">Mi trayectoria personal</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Educación
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experiencia
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Diseño y Desarrollo de Software</h3>
                                <span className="qualification__subtitle">Perú - Tecsup</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div className=""></div>
                            <div >
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div >
                                <h3 className="qualification__title"> Ingles Intermedio (B1)</h3>
                                <span className="qualification__subtitle">Perú - CONVERSA</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>
                            
                        </div>

                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Ingeniería de Sistemas e Informática</h3>
                                <span className="qualification__subtitle">Perú - UTP</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Presente
                                </div>
                            </div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                        <div className=""></div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div className="">
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>
                            
                        </div> */}
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>
                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Desarrollador Full Stack Junior</h3>
                                <span className="qualification__subtitle">CORVEL'S SAC </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Dic. 2022 - Mar. 2023
                                </div>
                            </div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div className=""></div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div className="">
                                <h3 className="qualification__title">Desarrollador de Software</h3>
                                <span className="qualification__subtitle">COVISUR S.A.</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Feb 2024 - Mar 2024
                                </div>
                            </div>
                            
                        </div>

                        <div className="qualification__data">
                            <div className="">
                                <h3 className="qualification__title">Desarrollador FrontEnd Junior</h3>
                                <span className="qualification__subtitle">DEVDATEP</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jun. 2024 - Sep. 2024
                                </div>
                            </div>
                            <div className="">
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

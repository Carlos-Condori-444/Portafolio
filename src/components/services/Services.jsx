import { useState } from "react";
import "./services.css";

export const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Servicios</h2>
            <span className="section__subtitle">Qué ofrezco</span>

            <div className="services__container container grid">
                <div className="services__content">
                    {/* Servicio 1 */}
                    <div className="">
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Desarrollo <br /> Web</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        Ver más {""}
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Desarrollo Web</h3>
                            <p className="services__modal-description">Servicio con experiencia en la creación de sitios web modernos y funcionales para clientes y empresas.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo de páginas web responsivas.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Integración de APIs para funcionalidad avanzada.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Optimización de rendimiento web.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    {/* Servicio 2 */}
                    <div className="">
                        <i className="uil uil-database services__icon"></i>
                        <h3 className="services__title">Gestión de <br /> Bases de Datos</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        Ver más {""}
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Gestión de Bases de Datos</h3>
                            <p className="services__modal-description">Experiencia en diseño, implementación y mantenimiento de bases de datos eficientes.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Diseño de esquemas de bases de datos.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Optimización de consultas SQL.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Configuración y gestión de servidores de bases de datos.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    {/* Servicio 3 */}
                    <div className="">
                        <i className="uil uil-chart services__icon"></i>
                        <h3 className="services__title">Análisis de <br /> Datos</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        Ver más {""}
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Análisis de Datos</h3>
                            <p className="services__modal-description">Ofrezco servicios de análisis y visualización de datos para la toma de decisiones empresariales.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Creación de dashboards interactivos.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Análisis de tendencias y patrones.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Procesamiento de grandes volúmenes de datos.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

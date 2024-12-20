import './footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Carlos Condori</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contacto</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/carlos-manuel-condori-choquehuayta/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/Carlos-Condori-444" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>

                    {/* <a href="" className="footer__social-link" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a> */}
                </div>
                <span className="footer__copy">
                    &#169; Crypticalcoder. Modificado de su <a href="https://www.youtube.com/watch?v=3aCoZudPEKE&list=PLllL5-GoO0IMTiIBlWrV-_rrHyXLBiJUf&index=9" target="_blank" rel="noopener noreferrer">tutorial.</a> 
                </span>


            </div>
        </footer>
    )
}

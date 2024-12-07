import "./scrollup.css";

export const ScrollUp = () => {
    window.addEventListener("scroll", function (){
        const ScrollUp = document.querySelector(".scrollup");
        // cuando el desplazamiento es mayor que la altura de la ventana gráfica 560, agregue la clase show-scroll a una etiqueta con la clase scroll-top        
        if (this.scrollY >= 560) 
            ScrollUp.classList.add("show-scroll");
        else
            ScrollUp.classList.remove("show-scroll");
    });
    return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

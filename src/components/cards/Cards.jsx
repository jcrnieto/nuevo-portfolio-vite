import './cards.css'

const Cards = () => {
    return (
        <div className="cards-container">
            <div className="card">
                <div className="content">
                    <p className="heading">Quien soy?</p>
                    <p className="para">
                        Tengo 38 años, vivo en Córdoba, Argentina.
                        En 2021 comencé mi viaje por el desarrollo web, 
                        enfocándome en ampliar mis habilidades en programación
                        y seguir una carrera en la industria tecnológica.
                        Por aquel entonces me encontraba trabajando en seguridad electrónica (alarmas, cámaras),
                        siendo técnico superior en mecatrónica, sin embargo mi pasión está en la programación
                    </p>
                </div>
            </div>

            <div className="card">
            <div className="content">
                    <p className="heading">Cuáles son mis metas</p>
                    <p className="para">
                       Aspiro a dominar las últimas tecnologías,
                       manteniéndome actualizado constantemente con las tendencias de la industria.
                       En última instancia, mi objetivo es asegurar proyectos desafiantes u oportunidades
                       de empleo que me permitan utilizar mis habilidades de programación de manera efectiva,
                       contribuyendo a experiencias digitales innovadoras y fáciles de usar.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards
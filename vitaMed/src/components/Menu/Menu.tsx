import { Link } from "react-router-dom";

export default function Menu(){

    return(
        <nav>
            <Link to="/">Home</Link>|
            <Link to="/paciente">Pacientes</Link>|
            <Link to="/contatos">Contatos</Link>|
            <Link to="/ensino">Ensino</Link>|
            <Link to="/integrantes">Integrantes</Link>|
            <Link to="/sobre">Sobre</Link>|
            <Link to="/unidades">Unidades</Link>
        </nav>
    );
}
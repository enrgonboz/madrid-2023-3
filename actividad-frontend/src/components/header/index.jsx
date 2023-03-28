import { Avatar } from "@chakra-ui/react";
import zaraLogo from "../../assets/images/zara-logo.svg";
import "./style.css";

export const Header = () => {

    const onClick = () => {
        window.location.reload();
    }

    return (
        <div className="header">
            <div className="header__logo">
                <img src={zaraLogo} alt="Zara" data-testid="zara-logo" onClick={onClick} />
            </div>
            <div className="header__avatar">
                {/* TODO: Ejercicio 1 cambiar el componente Placeholder por nuestro componente Avatar */}
                <Avatar name='Enrique Gonzalez' src='https://bit.ly/broken-link' />
            </div>
        </div>
    )
}
import "./header.scss";
import Logo from "../../assets/graphics/logo1.png";

export const Header = () => (
    <header>
        <div className="wrap">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
        </div>
    </header>
);

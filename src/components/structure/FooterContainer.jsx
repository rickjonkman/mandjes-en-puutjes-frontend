
import Github from "/src/assets/icons/github.svg";
import Linkedin from "/src/assets/icons/linkedin.svg";
import Novi from "/src/assets/icons/novi-icon.png";
import {Link} from "react-router-dom";
import "/src/scss/structure/structure-components.scss";

const FooterContainer = () => {

    const noviURL = 'http://www.novi.nl';
    const githubURL = 'http://www.github.com/rickjonkman';
    const linkedInURL = 'http://www.linkedin.com/in/rick-jonkman';

    return (
        <footer className="footer-container__class">
            <div className="footer__text-section">
                <p>Deze webapplicatie is ontworpen en gebouwd door Rick Jonkman als eindproject voor de bootcamp Full
                    Stack
                    Development bij Novi Hogeschool</p>
            </div>

            <div className="footer__icons-section">

                <Link to={noviURL} className="footer__icon">
                    <div className="footer__icon-wrapper">
                        <img
                            src={Novi}
                            alt="Logo van Novi Hogeschool"
                            id="footer__icon--novi"
                        />
                    </div>
                </Link>

                <Link to={githubURL} className="footer__icon">
                    <div className="footer__icon-wrapper">
                        <img
                            src={Github}
                            alt="Logo van Github"
                            id="footer__icon--github"
                        />
                    </div>
                </Link>

                <Link to={linkedInURL} className="footer__icon">
                    <div className="footer__icon-wrapper">
                        <img
                            src={Linkedin}
                            alt="Logo van LinkedIn"
                            id="footer__icon--linkedin"
                        />
                    </div>
                </Link>
            </div>

        </footer>
    );
};

export default FooterContainer;
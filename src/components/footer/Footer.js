import inst from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import git from "../../img/icons/gitHub.svg";
import linkedin from "../../img/icons/linkedIn.svg";

const Footer  = () => {
    return(<footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://www.instagram.com/timofey_._3/"><img src={inst} alt="Link"/></a>
                    </li>
                    <li className="social__item"><a href="https://twitter.com/Timofey19407500"><img src={twitter} alt="Link"/></a>
                    </li>
                    <li className="social__item"><a href="https://github.com/T1maty"><img src={git} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/timofey-fedoryk-5a0926258/"><img src={linkedin} alt="Link"/></a>
                        </li>
                </ul>

                <div>
                    <li className="social__item"><a href="https://github.com/Yablonskio"><img src={git} alt="Link"/></a></li>
                </div>
                <div className="copyright">
                    <p>© 2023 fullstack.com</p>
                </div>
            </div>
        </div>
    </footer>);
}

export  default  Footer;
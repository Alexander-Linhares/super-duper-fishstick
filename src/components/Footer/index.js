import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <section id="external-links">
                <nav className="social-links">
                    <ul>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Link para o Facebook">
                                <img src="./imagens/fb.png"></img>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Link para o Twitter">
                                <img src="./imagens/tw.png"></img>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Link para o Instagram">
                                <img src="./imagens/ig.png"></img>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section>
                <img src="./imagens/logo.png" alt="Logo da Organo"/>
            </section>
            <section>
                <p>&copy;Desenvolvido pela Alura.</p>
            </section>
        </footer>
    );
}

export default Footer;
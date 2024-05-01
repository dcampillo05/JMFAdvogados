import "../static/styles.css"
import Header from "../_components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>


      <header className="header-menu">
        <Header />
      </header>

      <section id="header" className="header">
        <div className="overlay-background">
          <div className="info-header-container">
            <div className="info-header">

              <h2>Escritório especializado em</h2>
              <h1>Áreas diversas</h1>
            </div>
          </div>
        </div>

        <div className="Button-Header">
          <button>Entre em contato</button>
        </div>

      </section>
      <main>
      <section className="Sobre-Section">
        <div className="Text-Container">
          <div className="Tittle-Text">
            <Image src={"/logo.webp"} alt="Logo JMF" width={160} height={80} />
          </div>
          <div className="Text-Sobre">
            <p>A JMF Sociedade de Advogados foi fundada em junho de 2010 com a missão de fornecer soluções jurídicas de qualidade para uma variedade de clientes. Ao longo dos anos, a firma construiu uma reputação sólida baseada em sua credibilidade, excelência e compromisso em encontrar as melhores soluções para os desafios enfrentados pelos clientes. Com uma equipe altamente especializada, a firma atua tanto preventivamente quanto de forma contenciosa, especialmente no complexo cenário tributário brasileiro, onde se dedica a reduzir os custos de conformidade e a defender contra cobranças abusivas. Desde sua fundação, a JMF Sociedade de Advogados tem sido um ponto de referência no mercado jurídico, oferecendo serviços de qualidade e proteção jurídica para seus clientes.</p>
          </div>

        </div>

        <div className="Image-Container-Sobre">
          <img className="" src="/img01.jpg" alt="Imagem" />
        </div>

      </section>

      <section className="Valores-Section">
        <div className="Tittle-Valores">
          <h2>Missão, Visão e Valores</h2>
        </div>

        <div className="Valores-Container">
          <div className="Valores-Item">
            <div className="Item-Tittle">
              <h3>Lorem Ipsum</h3>
            </div>
            <div className="Item-Text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>

          <hr className="Line-Divider" />

          <div className="Valores-Item">
            <div className="Item-Tittle">
              <h3>Lorem Ipsum</h3>
            </div>
            <div className="Item-Text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>

          <hr className="Line-Divider" />

          <div className="Valores-Item">
            <div className="Item-Tittle">
              <h3>Lorem Ipsum</h3>
            </div>
            <div className="Item-Text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>

        </div>

      </section>
      </main>

      <footer className="Footer-Section">
        <section className="Logo-Section">
        <Image src={"/logo.webp"} alt="Logo JMF" width={160} height={80} />
        </section>
        <section className="Contato-Section"> 
          <div className="Contato-Tittle"><h2>Lorem Ipsum</h2></div>
          <div className="Contato-Text"><p>(XX) XXXXX-XXXX</p></div>
        </section>
        
        <section className="Endereco-Section"> 
        <div className="Endereco-Tittle"><h2>Lorem Ipsum</h2></div>
          <div className="Endereco-Text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
        </section>

      </footer>

    </div >
  );
}

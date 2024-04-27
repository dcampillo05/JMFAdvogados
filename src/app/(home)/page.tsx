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
              {/* TODO: criar efeito de entrada com frame-motion */}
              <h2>Escritório especializada em</h2>
              <h1>Áreas diversas</h1>
            </div>
          </div>
        </div>

        <div className="Button-Header">
          <button>Entre em contato</button>
        </div>

      </section>

      <section className="sobre">
        <div className="overlay-background-sobre"></div>
        <div className="container-sobre flex justify-between">
          <div className="sobre-txt">
            <span>Quem somos?</span>
            <h2>JMF </h2>
            <h3>SOCIEDADE DE ADVOGADOS</h3>
            <p>Fundada em junho de 2010, a JMF Sociedade de Advogados é uma referência consolidada no mercado jurídico, sendo reconhecida por sua sólida trajetória, credibilidade inabalável e excelência na prestação de serviços advocatícios.

              Nossa equipe é formada por profissionais altamente qualificados e especializados em diversas áreas do Direito, o que nos permite oferecer soluções jurídicas completas e eficazes para nossos clientes.

              Atuamos de maneira proativa e reativa, tanto na prevenção de litígios quanto na resolução de disputas, representando tanto pessoas físicas quanto jurídicas. Nosso compromisso é fornecer uma abordagem holística e resultados que superem as expectativas, mantendo sempre o mais alto padrão de qualidade em todos os nossos serviços.
            </p>
          </div>
          <div className="sobre-img">
            <Image src={"/img01.jpg"} alt="" height={410} width={470} />
          </div>
        </div>
      </section>



    </div>
  );
}

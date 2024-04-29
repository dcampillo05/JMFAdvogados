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
        <div className="interface">
          <div className="container">
            <div className="flex">
              <div className="txt-sobre w-15">
                <div className="logo-sobre">
                  <Image src={"/logo.webp"} alt="Logo JMF" width={160} height={80} />
                </div>
                <p>A JMF Sociedade de Advogados foi fundada em junho de 2010 com a missão de fornecer soluções jurídicas de qualidade para uma variedade de clientes. Ao longo dos anos, a firma construiu uma reputação sólida baseada em sua credibilidade, excelência e compromisso em encontrar as melhores soluções para os desafios enfrentados pelos clientes. Com uma equipe altamente especializada, a firma atua tanto preventivamente quanto de forma contenciosa, especialmente no complexo cenário tributário brasileiro, onde se dedica a reduzir os custos de conformidade e a defender contra cobranças abusivas. Desde sua fundação, a JMF Sociedade de Advogados tem sido um ponto de referência no mercado jurídico, oferecendo serviços de qualidade e proteção jurídica para seus clientes.</p>
              </div>

              <div className="img-sobre">
                <img className="" src="/img01.jpg" alt="Imagem" />
              </div>
            </div>
          </div>
        </div>
      </section>



    </div >
  );
}

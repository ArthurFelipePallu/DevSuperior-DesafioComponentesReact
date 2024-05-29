import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ImageCard from "../../Components/ImageCard";
import TextCard from "../../Components/TextCard";
import "./styles.css";
export default function FirstPage() {
  return (
    <>
      <Header />
      <body>
        <main>
          <section id="FirstPage-section" className="dpr-container">
            <div className="chamado dpr-mt25">
              <p> Venha nos visitar</p>
            </div>

            <div className="dpr-grid-container dpr-mt25 ">
              <ImageCard />
              <ImageCard />
            </div>

            <div className="dpr-questions-area dpr-mt25">
              <div className="chamado dpr-padtp25">
                <p> O que estão dizendo </p>
                
              </div>
              <div className="dpr-questions-container dpr-padtp50">
                <TextCard />
                <TextCard />
                <TextCard />
                <TextCard />
                <TextCard />
              </div>
              <Footer/>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}

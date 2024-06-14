import * as Vsc from "react-icons/vsc";
import { Download, Faq, Features, Footer, Header, Navbar, Subscribe } from "./components";

function App() {
  return (
    <div className="App vh-100 d-flex flex-column justify-content-between overflow-x-hidden">
      <main className="main position-relative">
        <Navbar />
        <div className="headerBox vh-100">
          <Header />
        </div>
        <Features />
        <Download />
        <Subscribe />
        <Faq />
      </main>
      <Footer />

      
    </div>
  );
}

export default App;

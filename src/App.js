import * as Vsc from "react-icons/vsc";
import { Header, Navbar } from "./components";

function App() {
  return (
    <div className="App vh-100 d-flex flex-column justify-content-between overflow-x-hidden">
      <div className="main position-relative">
          
          <div className="headerBox vh-100">
            <Navbar/>
            <Header />
          </div>

      </div>

      {/* <div className="footer text-center py-3">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-muted">حمید کامیاب</a></small>
      </div> */}
    </div>
  );
}

export default App;

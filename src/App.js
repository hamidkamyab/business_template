import * as Vsc from "react-icons/vsc";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App vh-100 d-flex flex-column justify-content-between overflow-x-hidden">
      <div className="main">
          
          <div className="header vh-100">
            <Navbar/>
          </div>

      </div>

      {/* <div className="footer text-center py-3">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-muted">حمید کامیاب</a></small>
      </div> */}
    </div>
  );
}

export default App;

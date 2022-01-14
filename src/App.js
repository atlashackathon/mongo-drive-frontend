import logo from "./logo.svg";
import "./App.css";
import ElevateAppBar from "./components/ElevateAppBar";
import { Fragment } from "react";
import { Dropzone } from "@dropzone-ui/react";
function App() {
  return (
    <Fragment>
      <div
        className="main-wrapper"
        style={{ minHeight: "100vh", width: "100%" }}
      >
        <ElevateAppBar />
        <Dropzone></Dropzone>{" "}
      </div>
    </Fragment>
  );
}

export default App;

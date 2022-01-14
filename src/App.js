import logo from "./logo.svg";
import { Dropzone, FileItem, FullScreenPreview } from "@dropzone-ui/react";
import { useState } from "react";
import "./App.css";
import ElevateAppBar from "./components/ElevateAppBar";
import { Fragment } from "react";
function App() {
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
  };
  const onDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  const handleClean = (files) => {
    console.log("list cleaned", files);
  };
  return (
    <Fragment>
      <div
        className="main-wrapper"
        style={{ height: "100vh", width: "80%", margin:"auto" }}
      >
        <ElevateAppBar />
        <Dropzone
          style={{ minWidth: "550px" }}
          //view={"list"}
          onChange={updateFiles}
          minHeight="calc(100vh - 116px)"
          maxHeight="calc(100vh - 116px)"
          onClean={handleClean}
          value={files}
          //maxFiles={5}
          //header={false}
          // footer={false}
          maxFileSize={2998000000}
          label="Drag'n drop files here or click to browse"
          //label="Suleta tus archivos aquí"
          //accept=".png,image/*"
          // uploadingMessage={"Uploading..."}
          url="http://ec2-99-99-9-9.compute-1.amazonaws.com:2800/upload-my-file"
          //of course this url doens´t work, is only to make upload button visible
          uploadOnDrop
          //clickable={false}
          fakeUploading
          //localization={"FR-fr"}
          disableScroll
        >
          {files.map((file) => (
            <FileItem
              {...file}
              key={file.id}
              onDelete={onDelete}
              onSee={handleSee}
              //localization={"ES-es"}
              resultOnTooltip
              preview
              info
              hd
            />
          ))}
          <FullScreenPreview
            imgSource={imageSrc}
            openImage={imageSrc}
            onClose={(e) => handleSee(undefined)}
          />
        </Dropzone>
      </div>
    </Fragment>
  );
}

export default App;

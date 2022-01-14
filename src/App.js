import logo from "./logo.svg";
import {
  Dropzone,
  FileItem,
  FullScreenPreview,
  VideoPreview,
} from "@dropzone-ui/react";
import { useState } from "react";
import "./App.css";
import ElevateAppBar from "./components/ElevateAppBar";
import { Fragment } from "react";
function App() {
  const [files, setFiles] = useState([]);
  const [videoSrc, setVideoSrc] = useState(undefined);
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
  const handleWatch = (vidSrc) => {
    console.log("handleWatch", vidSrc);
    setVideoSrc(vidSrc);
  };
  return (
    <Fragment>
      <div
        className="main-wrapper"
        style={{ height: "100vh", width: "80%", margin: "auto" }}
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
              onWatch={handleWatch}
              resultOnTooltip
              preview
              info
              hd
            />
          ))}
        </Dropzone>
        <FullScreenPreview
          imgSource={imageSrc}
          openImage={imageSrc}
          onClose={(e) => handleSee(undefined)}
        />
        <VideoPreview
          videoSrc={videoSrc}
          openVideo={videoSrc}
          onClose={(e) => handleWatch(undefined)}
          controls
          autoplay
        />
      </div>
      <Fragment>
      <p>
        {"Get some "}
        <a
          href="https://www.learningcontainer.com/mp4-sample-video-files-download/#Sample_MP4_File"
          target="_blank"
        >
          MP4 demo videos
        </a>
      </p>
      <p>
        {"Get some "}
        <a
          href="https://www.learningcontainer.com/mp4-sample-video-files-download/#Sample_OGV_File"
          target="_blank"
        >
          OGV demo videos
        </a>
      </p>
      <p>
        {"Get some "}
        <a
          href="https://www.learningcontainer.com/mp4-sample-video-files-download/#Sample_WEBM_File"
          target="_blank"
        >
          WEBM demo videos
        </a>
      </p>
    </Fragment>
    </Fragment>
  );
}

export default App;

import "./Modal.css";
import jsPDF from "jspdf";
import { useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import PropTypes from 'prop-types'

const ModalOverlay = (props) => {
  const screenshotBtnRef = useRef();
  const screenshotPreviewRef = useRef();
  const closeBtnRef = useRef();
  const imgRef = useRef();

  const takeAshot = async (e) => {
    e.preventDefault();
    try {
      // asking permission to use a media input to record current tab
      const stream = await navigator.mediaDevices.getDisplayMedia({
        preferCurrentTab: true,
      });

      const video = document.createElement("video");

      video.addEventListener("loadedmetadata", () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = 300;
        canvas.height = 300;

        // to avoid blank or white show instead of image
        video.play();

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        stream.getVideoTracks()[0].stop();
        // passing canvas data url as screenshot preview src
        imgRef.current.src = canvas.toDataURL();

        // building pdf file
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(canvas, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save(`Captureof${new Date(new Date().getDay())}`);
        screenshotPreviewRef.current.classList.add("show");
      });
      // passing capture stream data as video source object
      video.srcObject = stream;
    } catch (error) {
      // if image couldn't capture by any reason, then alert the msg
      alert("Failed to capture screenshot!");
    }
  };

  const close = () => {
    screenshotPreviewRef.current.classList.toggle("show");
  };
  return (
    <div className="modal">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          fontSize:'2rem',
          fontFamily: 'Satisfy'
        }}
      >
        <span>
          {`screen capture of ${new Date().toUTCString().slice(5, 16)}`}
        </span>{" "}
        <span style={{fontSize:'5rem'}}>⚽</span>
      </div>
      <div className="content">{props.children}</div>
      <div className="src-btn-div flex justify-center">
        <button
          id="src-btn"
          ref={screenshotBtnRef}
          onClick={(e) => takeAshot(e)}
          style={{marginRight:'15px'}}
        >
          Capture Screenshot
        </button>
        <button
          id="cancel-btn"
          ref={screenshotBtnRef}
          onClick={() => props.onclose()}
        >
          Cancel
        </button>
      </div>
      <div id="src-preview" ref={screenshotPreviewRef}>
        <div id="screenshot">
          <button id="close-btn" ref={closeBtnRef} onClick={() => close()}>
            <AiOutlineCloseCircle
              className="btn text-red-200 text-5xl"
              whith={10}
              height={10}
            />
          </button>

          <img src="" alt="screenshot" id="img" ref={imgRef} />
        </div>
      </div>
    </div>
  );
};

ModalOverlay.prototype = {
  onclose:PropTypes.func,
  close:PropTypes.func,
};

export default ModalOverlay;

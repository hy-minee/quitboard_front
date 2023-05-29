import { useState } from "react";
import "./Mainlayout.css";
import Overlay from "../pages/Overlay";
import intro from "../assets/images/Intro.svg";
import Header from "./Header";
import Footer from "./Footer";
import MainContents from "./MainContents";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

function Mainlayout() {
  const [showImage, setShowImage] = useState(true);

  const handleImageClick = () => {
    setShowImage(false);
  };
  return (
    <div
      className="Mainlayout"
      style={{ backgroundColor: "rgba(77, 119, 81, 1)", overflow: "auto" }}
    >
      {showImage && (
        <Overlay onClick={handleImageClick}>
          <img
            src={intro}
            alt="placeholder"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              maxHeight: "100%",
              objectFit: "contain",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
            }}
          />
        </Overlay>
      )}
      <Header />
      <main>
        <MainContents />
      </main>
      <Footer />
    </div>
  );
}

export default Mainlayout;

import { Box } from "@chakra-ui/react";
import "./ImageSlide.css";
import search1 from "../assets/images/search1.jpg";
import search3 from "../assets/images/search3.jpg";
import search4 from "../assets/images/search4.jpg";
import search5 from "../assets/images/search5.jpg";
import search9 from "../assets/images/search9.jpg";
import search10 from "../assets/images/search10.jpg";
import search11 from "../assets/images/search11.jpg";
import search12 from "../assets/images/search12.jpg";

function ImageSlide() {
  return (
    <Box id="slider">
      <Box className="image-box">
        <Box className="searchimage">
          <img src={search10} />
        </Box>
        <Box className="searchimage">
          <img src={search4} />
        </Box>
        <Box className="searchimage">
          <img src={search5} />
        </Box>
        <Box className="searchimage">
          <img src={search3} />
        </Box>
        <Box className="searchimage">
          <img src={search1} />
        </Box>
        <Box className="searchimage">
          <img src={search11} />
        </Box>
        <Box className="searchimage">
          <img src={search9} />
        </Box>
        <Box className="searchimage">
          <img src={search12} />
        </Box>

        <Box className="searchimage">
          <img src={search10} />
        </Box>
        <Box className="searchimage">
          <img src={search4} />
        </Box>
        <Box className="searchimage">
          <img src={search5} />
        </Box>
        <Box className="searchimage">
          <img src={search3} />
        </Box>
        <Box className="searchimage">
          <img src={search1} />
        </Box>
        <Box className="searchimage">
          <img src={search11} />
        </Box>
        <Box className="searchimage">
          <img src={search9} />
        </Box>
        <Box className="clone">
          <img src={search12} />
        </Box>
      </Box>
    </Box>
  );
}
export default ImageSlide;

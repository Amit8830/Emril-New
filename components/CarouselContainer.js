import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./../assets/images/1.jpg";
import image2 from "./../assets/images/1 - Copy.jpg";
import image3 from "./../assets/images/1 - Copy (2).jpg";

const CarouselContainer = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="Second slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    // <Carousel fade={true} pause={false}>
    //   <Carousel.Item interval={2000}>
    //     <img
    //       className="d-block w-100"
    //       src={image1}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       {/* <h3>First slide label</h3> */}

    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item interval={2000}>
    //     <img
    //       className="d-block w-100"
    //       src={image2}
    //       alt="Third slide"
    //     />
    //     <Carousel.Caption>
    //       {/* <h3>Second slide label</h3> */}

    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item interval={2000}>
    //     <img
    //       className="d-block w-100"
    //       src={image3}
    //       alt="Third slide"
    //     />
    //     <Carousel.Caption>
    //       {/* <h3>Third slide label</h3> */}

    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
};

export default CarouselContainer;

// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import Slide1 from "./BuyProd/Imgs/img1.jpg";
// import Slide2 from "./BuyProd/Imgs/img1.jpg";
// import Slide3 from "./BuyProd/Imgs/img1.jpg";
// // import ScrollDown from "../scroll-down/scroll-down.component";
// import "./Carousal.css";

// const CarouselContainer = () => {
//   return (
//     <div id="home">
//       <Carousel controls={false} indicators interval={2500} pause={false}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 custom-img"
//             src={Slide2}
//             alt="First slide"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 custom-img"
//             src={Slide3}
//             alt="Third slide"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 custom-img"
//             src={Slide1}
//             alt="Third slide"
//           />
//         </Carousel.Item>
//       </Carousel>
//       {/* <ScrollDown /> */}
//     </div>
//   );
// };

// export default CarouselContainer;

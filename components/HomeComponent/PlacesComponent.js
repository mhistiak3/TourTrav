
import { Box, Button, Container, Typography } from "@mui/material";
import Carousel from "react-elastic-carousel";
import { useRef } from "react";


const PlacesComponent = () => {
  const ref = useRef({})
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow:3 },
    { width: 1000, itemsToShow: 4 },
  ];
  const tourePlaces = [
    {
      id: 1,
      name: "Turkey",
      image: "/places/tk.jpg",
    },
    {
      id: 2,
      name: "Dubai",
      image: "/places/dubai.jpg",
    },
    {
      id: 3,
      name: "Bangladesh",
      image: "/places/bd.jpg",
    },
    {
      id: 4,
      name: "Kashmir",
      image: "/places/kashmir.jpg",
    },
    {
      id: 5,
      name: "Indoneshia",
      image: "/places/ind.jpg",
    },
    {
      id: 6,
      name: "Afganistan",
      image: "/places/afg.jpg",
    },
  ];
  return (
    <Box py={10}>
      <div id="places"></div>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "20px ",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => ref.current.slidePrev()}
          >
            Prev
          </Button>
          <Typography component="h2" fontSize="30px" fontWeight="bold">
            Our Tour Places
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => ref.current.slideNext()}
          >
            Next
          </Button>
        </Box>
        <Typography textAlign={"center"} mb="20px">
          Lorem ipsum dolor sit amet consectetur radipisicing
          <br /> elit Vitae explicaboecusandae.
        </Typography>

        <Carousel
          pagination={false}
          ref={ref}
          breakPoints={breakPoints}
          showArrows={false}
        >
          {tourePlaces.map((place) => (
            <Box
              key={place.id}
              sx={{
                background: `url(${place.image})`,
                borderRadius: "100%",
                height: " 270px",
                width: "260px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repet",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "28px",
                  color: "white",
                }}
              >
                {place.name}
              </h3>
            </Box>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default PlacesComponent;

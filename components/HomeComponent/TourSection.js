import { Box, Container, Grid, Typography } from "@mui/material";
import TourCard from "../TourCard";

const TourSection = ({ populerTour }) => {
    const Tours = populerTour.slice(0,3)
  
  return (
    <Box
      sx={{
        py: "40px",
        background: `linear-gradient(#0f1d3080, #21232580), url(/places/kashmir.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <Container>
        <Typography
          component="h2"
          fontSize="30px"
          textAlign="center"
          fontWeight="bold"
        >
          Our Tour Places
        </Typography>
        <Box>
          <Grid container spacing={3} py={3}>
            {Tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TourSection;



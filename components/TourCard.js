import { Box, Button, Grid, Typography } from "@mui/material";

const TourCard = ({ tour }) => {
  return (
    <Grid item lg={4} sm={6} xs={12} >
      <Box sx={{ borderRadius: "5px", background: "white" }}>
        <img
          src={tour.image}
          alt={tour.name}
          style={{ width: "100%", height: "300px", borderRadius: "5px" }}
        />
        <Box sx={{ p: "20px 15px", color: "black" }}>
          <Typography component="h2" fontSize="22px">
            {tour.name.length > 25 ? tour.name.slice(0, 25)+'...' : tour.name}
          </Typography>
          <Box
            sx={{
              background: "green",
              my: "10px",
              padding: "5px 10px",
              color: "white",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            Price: {tour.price}
          </Box>
          <Button variant="contained" color="primary">
            More Info
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default TourCard;

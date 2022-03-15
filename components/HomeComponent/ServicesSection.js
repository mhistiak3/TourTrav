import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
const ServicesItem = styled.div`
  padding: 70px 0;
  h3{
    font-size:27px ;
    font-weight:400 ;
    margin:15px 0 ;
  }
  img{
    width:100% ;
    height: 250px;
  }
`;
const ServicesSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: "50px",
        background: "#F7F7F7",
      }}
    >
      <div id="services"></div>
      <Container>
        <Box>
          <Typography component={"h2"} mb="5px" fontSize="33px">
            Our Services
          </Typography>
          <Typography component={"p"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aut
            deserunt laudantium?
          </Typography>
        </Box>
        <ServicesItem>
          <Grid container spacing={5}>
            <Grid item md={4}>
              <img src="transportation.svg" alt="" />
              <h3>Transportation</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                soluta recusandae amet.
              </p>
            </Grid>
            <Grid item md={4}>
              <img src="shoop.svg" alt="" />
              <h3>Hotel Booking</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                soluta recusandae amet.
              </p>
            </Grid>
            <Grid item md={4}>
              <img src="hotel.svg" alt="" />
              <h3>Shopping Centers</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                soluta recusandae amet.
              </p>
            </Grid>
          </Grid>
        </ServicesItem>
      </Container>
    </Box>
  );
};

export default ServicesSection;

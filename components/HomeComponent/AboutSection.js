import { Box, Container, Grid, Typography } from "@mui/material";


const AboutSection = () => {
  return (
    <Box py={7}>
        <div id='about'> </div>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Typography component="h1" fontSize="32px" mb="10px">
              About Us
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              voluptatum pariatur, maxime error deleniti cumque id facere illo
              sed quas vitae repudiandae debitis nisi suscipit, quo omnis fugiat
              quasi cupiditate? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Aspernatur quas voluptatibus placeat itaque
              provident sed soluta! Maxime qui ratione repellendus!
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              voluptatum pariatur, maxime error deleniti cumque id facere illo
              sed quas vitae repudiandae debitis nisi suscipit, quo omnis fugiat
              quasi cupiditate? Lorem ipsum dolor, 
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img src="home-bg.jpg" alt="" width={"100%"} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

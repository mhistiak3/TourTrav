import { Box, Container, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box className="footer_bg">
      <Container>
        <Box>
          <Grid container spacing={5}>
            <Grid item md={3}>
              <Box>
                <h3>About Us</h3>
                <hr className="footer_hr" />
                <Typography
                  component="p"
                  fontSize="16px"
                  fontWeight="lighter"
                  mb="20px"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, exercitationem excepturi molestias nulla consequatur
                  reprehenderit vero nobis.
                </Typography>
                <div className="logo">TourTrav</div>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box>
                <h3>Our Services</h3>
                <hr className="footer_hr" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="footer_link"
                >
                  <Link href="/">Populer Tour</Link>
                  <Link href="/">Deals</Link>
                  <Link href="/">Offer</Link>
                  <Link href="/">Team</Link>
                  <Link href="/">Testimonials</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box>
                <h3>Quick Links</h3>
                <hr className="footer_hr" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="footer_link"
                >
                  <Link href="/">Home</Link>
                  <Link href="/">About</Link>
                  <Link href="/">Services</Link>
                  <Link href="/">Blog</Link>
                  <Link href="/">Team</Link>
                  <Link href="/">Contact</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box>
                <h3>Gallery</h3>
                <hr className="footer_hr" />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2FzaG1pcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                    alt=""
                    style={{ width: "50%" }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1134&q=80"
                    alt=""
                    style={{ width: "50%" }}
                  />
                  <img src="home-bg.jpg" alt="" style={{ width: "50%" }} />
                  <img
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                    alt=""
                    style={{ width: "50%" }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ textAlign: "center", padding: "10px", mt: "20px" }}>
          <p>@Copyright iA Coder | Design and Developed by Istiak Ahammad </p>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

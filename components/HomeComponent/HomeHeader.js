import styled from "@emotion/styled";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

// All Style Component
const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  text-align: center;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap:20px ;
  }
  a {
    margin: 10px;
    font-weight: 500;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 200px;
  color: white;
  h3 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  h1 {
    font-size: 50px;
    font-weight: bold;
    text-transform: capitalize;
  }
  p {
    font-size: 18px;
    margin-top: 10px;
    text-align: center;
    margin-bottom: 15px;
  }
`;

const HomeHeader = () => {
  return (
    <Box>
      <Container>
        <NavBar>
          <Box>
            <Link href={"/"}>Home</Link>
            <a href={"#places"}>Places</a>
            <a href={"#about"}>About</a>
            <Link href={"#services"}>Services</Link>
            <Link href={"/blog"}>Blog</Link>
          </Box>
          <Box>
            <Link href={'/'}>
            
            <div className="logo">TourTrav</div>
            </Link>
          </Box>
          <Box>
            <Link href={"/"}>Our Tour</Link>
            <Link href={"/"}>Offers</Link>
            <Link href={"/"}>Contact</Link>

            <Link href={"/"}>
              <Button variant="contained" color="primary">
                Buy Now
              </Button>
            </Link>
          </Box>
        </NavBar>
        <hr />
        <Hero>
          <Typography component="h3" textAlign={'center'}>To Travel is to live</Typography>
          <Typography component="h1" textAlign={'center'}>Your Journey Begins</Typography>
          <Typography component="p" textAlign={'center'}>
            Contact to our team for Booking a tour and, <br /> be ready to
            explore the buetiful world and get happiness
          </Typography>
          <Button variant="contained" color="primary" size="large">
            All Travels
          </Button>
        </Hero>
      </Container>
    </Box>
  );
};

export default HomeHeader;

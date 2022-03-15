import styled from "@emotion/styled";
import { Box, Button, Container } from "@mui/material";
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
    grid-gap: 20px;
  }
  a {
    margin: 10px;
    font-weight: 500;
  }
`;


const Header = () => {
  return (
    <Box sx={{ background: "#26BDF7" }}>
      <Container>
        <NavBar>
          <Box>
            <Link href={"/"}>Home</Link>
            <a href={"/#places"}>Places</a>
            <a href={"/#about"}>About</a>
            <Link href={"/#services"}>Services</Link>
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
      
      </Container>
    </Box>
  );
};

export default Header;

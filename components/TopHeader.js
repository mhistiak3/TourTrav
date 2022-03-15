import {
  AccessTime,
  Chat,
  Facebook,
  Google,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";

const TopHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0F1D30",
        color: "#b0b6c2",
        padding: "10px 0",
      }}
    >
      <Container
        component={Box}
        sx={{
          display: "flex",
          justifyContent: { sm: "space-between", xs: "center" },
          flexDirection: { sm: "row", xs: "column" },
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          component="div"
        >
          <AccessTime fontSize="20" sx={{ mr: "8px" }} />
          <Typography fontSize="16px">
            Sun - Fri 10am - 07.30pm, Saturday Closed
          </Typography>
        </Box>
        <Box
          sx={{
            width: { sm: "20%",sx:'60%' },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Facebook fontSize="20" /> <Twitter fontSize="20" />
          <LinkedIn fontSize="20" /> <Instagram fontSize="20" />
          <Google fontSize="20" />
          <Chat fontSize="20" />
        </Box>
      </Container>
    </Box>
  );
};

export default TopHeader;

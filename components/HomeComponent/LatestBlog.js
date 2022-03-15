import { Box, Container, Typography } from "@mui/material";
import BlogCard from "../BlogCard";

const LatestBlog = ({ TravelLatestBlog }) => {
  const BlogPost =
    TravelLatestBlog.length > 3
      ? TravelLatestBlog.slice(0, 3)
      : TravelLatestBlog;
  return (
    <Box py={5}>
      <Container>
        <Box textAlign={"center"}>
          <Typography component="h2" fontSize={"30px"}>
            Latest Blog
          </Typography>
          <Typography component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Box>
        <Box
          sx={{
            py: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gridGap: "40px",
          }}
        >
          {BlogPost.map((blog,index)=><BlogCard key={index} blog={blog} />)}
        </Box>
      </Container>
    </Box>
  );
};

export default LatestBlog;

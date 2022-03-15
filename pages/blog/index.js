import { Box, Container, Typography } from "@mui/material";
import { createClient } from "contentful";
import BlogCard from "../../components/BlogCard";

const Blog = ({ travelBlog }) => {
  return (
    <Box py={4}>
      <Container>
        <Typography fontSize={"30px"} component="h2">
          All Blog
        </Typography>
        <Box
          sx={{
            py: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gridGap: "40px",
          }}
        >
          {travelBlog.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({
    content_type: "tourBlog",
  });

  return {
    props: {
      travelBlog: response.items,
    },
    revalidate: 1,
  };
}
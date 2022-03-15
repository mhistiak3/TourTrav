import styled from "@emotion/styled";
import { AccountCircle, PunchClock } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { createClient } from "contentful";
import moment from "moment";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BlogDetails = styled.div`
  width: 70%;
  box-shadow: 2px 2px 20px rgba(15, 28, 47, 0.1);
  padding: 30px;
  margin: 20px auto;
  border-radius: 5px;
  h1,h2,h3{
    margin:10px 0 !important ;
  }
`;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
const SingleBlog = ({ blogDetail }) => {
  return (
    <Box>
      <Container>
        <BlogDetails>
          <Typography fontSize="28px">{blogDetail.fields.title}</Typography>

          <img
            src={blogDetail.fields.thumbnail.fields.file.url}
            alt=""
            style={{ width: "100%", borderRadius: "3px", marginTop: "10px" }}
          />
          <Box
            sx={{
              display: "flex",
              width: "350px",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#293650",
              padding: "10px",
              mt: "5px",
              color: "white",
              borderRadius: "3px",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AccountCircle sx={{ mr: "10px" }} />{" "}
              <span>{blogDetail.fields.author}</span>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PunchClock sx={{ mr: "10px" }} />
              <span>
                {moment(blogDetail.fields.date).format("MMM Do YYYY")}
              </span>
            </span>
          </Box>
          <Box sx={{my:'40px'}}>{documentToReactComponents(blogDetail.fields.descriptions)}</Box>
        </BlogDetails>
      </Container>
    </Box>
  );
};

export default SingleBlog;

export async function getStaticPaths() {
  const response = await client.getEntries({
    content_type: "tourBlog",
  });
  const paths = response.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "tourBlog",
    "fields.slug": params.slug,
  });
  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        parmanent: false,
      },
    };
  }
  return {
    props: {
      blogDetail: items[0],
    },
    revalidate: 1,
  };
}

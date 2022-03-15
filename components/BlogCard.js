import { Box, Button, Typography } from "@mui/material";
import moment from "moment";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <Box
      sx={{
        height: "450px",
        width: "400px",
        background: `linear-gradient(#0f1d3080, #21232580), url(${
          "https:" + blog.fields.thumbnail.fields.file.url
        })`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "5px",
        padding: "30px 15px",
        color: "white",
        position: "relative",
      }}
    >
      <span>:- {blog.fields.author}</span>
      <Typography component="h2" fontSize="27px" my={"5px"} fontWeight={"bold"}>
        {+blog.fields.title.length > 40
          ? blog.fields.title.slice(0, 40) + "..."
          : blog.fields.title}
      </Typography>
      <Box
        sx={{
          background: "#0F1D30",
          mt: "5px",
          p: "7px 12px",
          borderRadius: "5px",
          display: "inline-block",
        }}
      >
        Date: {moment(blog.fields.date).format("MMM Do YYYY")}
      </Box>
        <Button
          color="primary"
          variant="contained"
          sx={{ position: "absolute", bottom: "20px", left: "20px" }}
        >
      <Link href={`/blog/${blog.fields.slug}`} passHref>
          Read More
      </Link>
        </Button>
    </Box>
  );
};

export default BlogCard;

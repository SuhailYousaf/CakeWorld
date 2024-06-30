// cakes.js

import React from "react";
import { MenuList } from "../data/cakes";
import Layout from "../components/Layout/Layout";
import "../styles/HomeStyles.css";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cakes = () => {
  return (
    <Layout>
      <h1 className="cakes-heading">Our Cakes</h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {MenuList.map((menu, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 250, display: "flex", flexDirection: "column", m: 2 }}
          >
            <CardActionArea>
              {menu.image && (
                <CardMedia
                  sx={{ height: 200 }}
                  component="img"
                  src={menu.image}
                  alt={menu.name}
                />
              )}
              <CardContent>
                <Typography variant="h5" gutterBottom component="div">
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography variant="body2" color="text.secondary" style={{marginTop: 'auto'}}>
                  Price: {menu.price}
                </Typography>
                <Link to={`/cakes/${menu.id}`}>
                  <Button variant="contained" color="primary">
                    More Details
                  </Button>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Cakes;

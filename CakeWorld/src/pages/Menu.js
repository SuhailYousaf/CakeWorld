import React from "react";
import { MenuList } from "../data/data";
import { Link } from "react-router-dom";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from "@mui/material";
import Header from "../components/Layout/Header";


const Menu = () => {
  return (
    <>
      <Header />
      <div>
        <h1 style={{ textAlign: "center" }}>Our Products</h1>
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
              sx={{ maxWidth: 300, display: "flex", m: 2 }}
            >
              <CardActionArea>
                {menu.image && (
                  <CardMedia
                    sx={{ minHeight: 200 }}
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
                  <Link to={`/${menu.name.toLowerCase().replace(/\s+/g, '')}`}>
                    <Button variant="contained" color="primary">
                      Check Now
                    </Button>
                  </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </div>
      
    </>
  );
};

export default Menu;

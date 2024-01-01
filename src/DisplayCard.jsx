import React from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';




export const DisplayCard = ({data}) => {
    let images = {
        rain : "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D",
        hot:"https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D",
        cold:"https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D",
    }

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            data.humidity>70? images.rain : data.temp>15? images.hot:images.cold
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Tempreature : {data.temp}&deg;C</p>
            <p>Humidity : {data.humidity}</p>
            <p>Feels_like : {data.feels_like}&deg;C</p>
            <p>Min_temp : {data.temp_min}&deg;C</p>
            <p>Max_temp : {data.temp_max}&deg;C</p>
            <p>Weather can be described as : {data.weather}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ProjectCard({ proj }) {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea onClick={() => window.location.href=proj.link}>
        <CardMedia
          component="img"
          height="140"
          image={proj.img}
          alt="project photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {proj.projName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {proj.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
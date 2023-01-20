
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Person from '@mui/icons-material/Person';

type Props = {}

const Card4 = (props: Props) => {

    const card = (
        <React.Fragment>
          <CardContent>
            <Person />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Other Plans
            </Typography>
          </CardContent> 
        </React.Fragment>
      );


  return (
    <Box sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: 343,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
      }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}

export default Card4
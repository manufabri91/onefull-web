import { Button, Card, CardActions, CardContent, CardHeader, Grid, Icon, Typography } from '@material-ui/core';
import './TarjetaPrecio.scss'
import React from 'react';


function TarjetaPrecio(props) {
  const { item } = props;
  return (
    <Grid
      item
      key={item.title}
      xs={12}
      sm={12}
      md={4}
    >
      <Card className="card">
        <CardHeader
          title={item.title}
          subheader={item.subtitle}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center' }}
          className="header"
        />
        <CardContent className="content">
          <div className="pricing">
            <Typography component="h2" variant="h3" color="textPrimary">
              $ {item.price}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              /mes
            </Typography>
          </div>
          <ul>
            {item.description.map((line) => (
              <Typography
                component="li"
                variant="subtitle1"
                align="center"
                key={line}
              >
                <Icon className="feature-icon">check_circle</Icon>
                {line}
              </Typography>
            ))}
          </ul>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color="primary"
          >
            {item.buttonText}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default TarjetaPrecio;
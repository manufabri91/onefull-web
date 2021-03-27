import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Icon,
  Typography,
  makeStyles,
} from '@material-ui/core';
import colors from '../../assets/styles/colors.enum';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: 'lightgrey',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  pricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: '1rem',
  },
  descriptionItem: {
    display: 'flex',
  },
  featureIcon: {
    color: colors.AZUL_ONE,
  },
}));

const TarjetaPrecio = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid item key={item.name} xs={12} sm={12} md={4}>
      <Card className={classes.card}>
        <CardHeader
          title={item.name}
          subheader={item.description}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center' }}
          className={classes.header}
        />
        <CardContent className={classes.content}>
          <div className={classes.pricing}>
            <Typography component='h2' variant='h3' color='textPrimary'>
              $ {item.price}
            </Typography>
            <Typography variant='h6' color='textSecondary'>
              /mes
            </Typography>
          </div>
          <ul>
            {item.features.map((line) => (
              <Typography
                className={classes.descriptionItem}
                component='li'
                variant='subtitle1'
                align='left'
                key={line}
              >
                <Icon className={classes.featureIcon}>check_circle</Icon>
                {line}
              </Typography>
            ))}
          </ul>
        </CardContent>
        <CardActions>
          <Button fullWidth variant='contained' color='primary'>
            {item.buttonText}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default TarjetaPrecio;

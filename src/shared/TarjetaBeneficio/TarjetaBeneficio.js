import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ShareIcon from '@material-ui/icons/Share'
import { format, parseISO } from 'date-fns'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}))

const TarjetaBeneficio = ({ item }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='proveedor-logo' className={classes.avatar}>
            {/* <img src={item.supplier.logoUrl} alt={item.title} /> */}
          </Avatar>
        }
        title={item.title}
        subheader={`${item.supplier.name}`}
      />
      <CardMedia
        className={classes.media}
        image={item.descriptionImageUrl}
        title={item.title}
      />
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          gutterBottom
        >
          {item.description}
        </Typography>
        <Typography variant='caption' color='textSecondary' component='p'>
          {`Válido hasta: ${format(parseISO(item.dateTo), 'dd/MM/yyyy')}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default TarjetaBeneficio

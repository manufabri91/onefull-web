import React, { useContext, useState } from 'react';
import {
  Grid,
  TextField,
  Typography,
  Modal,
  makeStyles,
  Button,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CityContext from '../../CityContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '30%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalContactanos = ({ open, handleClose, plan }) => {
  const classes = useStyles();
  const { selectedCity } = useContext(CityContext);
  const [contactData, setContactData] = useState({});
  const [sentForm, setSentForm] = useState(false);
  const handleFirstNameChange = (e) => {
    setContactData({ ...contactData, firstName: e.target.value });
  };
  const handleLastNameChange = (e) => {
    setContactData({ ...contactData, lastName: e.target.value });
  };
  const handlePhoneChange = (e) => {
    setContactData({ ...contactData, phone: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailBody = `${contactData.firstName} ${contactData.lastName} solicita el servicio ${plan} en ${selectedCity.name}.\nContactarlo al ${contactData.phone}.`;
    console.log(mailBody);
    setSentForm(true);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='contact'
      aria-describedby='contact modal'
    >
      <div
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        className={classes.paper}
      >
        {!sentForm ? (
          <form onSubmit={handleSubmit}>
            <Typography variant='h6'>
              ¡Ya estas mas cerca de tener nuestro plan {plan ? plan : ''}!
            </Typography>
            <Typography style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              Dejanos tus datos para poder contactarte
            </Typography>
            <Grid container alignItems='flex-start' spacing={2}>
              <Grid item xs={6}>
                <TextField
                  required
                  label='Nombre'
                  fullWidth
                  onChange={handleFirstNameChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label='Apellido'
                  fullWidth
                  onChange={handleLastNameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label='Teléfono'
                  placeholder='Cod.Area + Numero'
                  type='tel'
                  fullWidth
                  onChange={handlePhoneChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth
                  type='submit'
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        ) : (
          <>
            <Typography variant='h6' align='center'>
              ¡Tu solicitud fue recibida!
            </Typography>
            <Typography align='center'>
              Pronto nos comunicaremos con vos
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <CheckCircleIcon color='primary' style={{ fontSize: '10rem' }} />
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
export default ModalContactanos;

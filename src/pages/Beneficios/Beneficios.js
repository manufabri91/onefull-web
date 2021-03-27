import {
  Button,
  CircularProgress,
  Container,
  Divider,
  Drawer,
  Fab,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  makeStyles,
  MenuItem,
  Select,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import apiRoutes from '../../apiRoutes';
import PiggyAhorros from '../../assets/img/piggy-ahorros1.png';
import colors from '../../assets/styles/colors.enum';
import useFetchAll from '../../services/useFetchAll';
import toQueryString from '../../shared/helpers/toQueryString';
import TarjetaBeneficio from '../../shared/TarjetaBeneficio/TarjetaBeneficio';

const WhiteTitleTypography = styled(Typography)({
  fontWeight: 700,
  opacity: 1,
  color: '#fff',
});

const useStyles = makeStyles((theme) => ({
  banner: {
    height: '35vh',
    backgroundColor: colors.AZUL_ONE_DARK,
    backgroundBlendMode: 'color-burn',
    backgroundImage: `url('${PiggyAhorros}')`,
    backgroundSize: '8rem',
    [theme.breakpoints.up('md')]: {
      height: '30vh',
    },
  },
  floatingButton: {
    position: 'fixed',
    top: '40vh',
    left: '-45px',
  },
  floatingSmallButton: {
    position: 'fixed',
    bottom: '2rem',
    left: '.5rem',
  },
  pageTitle: {
    paddingTop: '2rem',
  },
  pageSubtitle: {
    paddingTop: '2.75rem',
  },
  gridContainer: {
    padding: '1rem 2rem',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const Beneficios = () => {
  const classes = useStyles();
  const history = useHistory();
  const search = useLocation().search;
  const vendor = new URLSearchParams(search).get('proveedor') || '';
  const city = new URLSearchParams(search).get('localidad') || '';
  const type = new URLSearchParams(search).get('rubro') || '';

  const benefitsUrl = `${apiRoutes.benefits}${toQueryString({
    proveedor: vendor,
    localidad: city,
    rubro: type,
  })}`;
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [typeFilter, setTypeFilter] = useState(type);
  const [cityFilter, setCityFilter] = useState(city);
  const [vendorFilter, setVendorFilter] = useState(vendor);
  const { data, loading, error } = useFetchAll(
    [benefitsUrl, apiRoutes.benefitTypes, apiRoutes.cities, apiRoutes.cities],
    [benefitsUrl]
  );

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const applyFilters = (proveedor, localidad, rubro) => {
    history.push(
      `/beneficios${toQueryString({ proveedor, localidad, rubro })}`
    );
  };

  const handleApply = (e) => {
    e.preventDefault();
    applyFilters(vendorFilter, cityFilter, typeFilter);
    setIsOpenDrawer(false);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setTypeFilter('');
    setCityFilter('');
    setVendorFilter('');
    applyFilters();
    setIsOpenDrawer(false);
  };

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    if (!isOpen) applyFilters(vendorFilter, cityFilter, typeFilter);
    setIsOpenDrawer(isOpen);
  };

  if (loading) return <CircularProgress />;
  if (error) throw error;

  const [benefits, benefitTypes, localities, suppliers] = data;

  return (
    <>
      <Container maxWidth='xl' component='section' className={classes.banner}>
        <WhiteTitleTypography
          variant='h4'
          align='center'
          color='initial'
          className={classes.pageTitle}
          paragraph
          gutterBottom
        >
          Beneficios Vigentes
        </WhiteTitleTypography>
        <WhiteTitleTypography
          variant='body1'
          align='center'
          color='initial'
          className={classes.pageSubtitle}
          paragraph
          gutterBottom
        >
          Conocé los beneficios que tenés con tu tarjeta de descuentos
        </WhiteTitleTypography>
        {isSmallScreen ? (
          <div className={classes.floatingSmallButton}>
            <Fab
              color='primary'
              aria-label='filtrar'
              className={classes.margin}
              onClick={toggleDrawer(true)}
            >
              <FilterListIcon />
            </Fab>
          </div>
        ) : (
          <div className={classes.floatingButton}>
            <Fab
              variant='extended'
              size='small'
              color='primary'
              aria-label='filtrar'
              className={classes.margin}
              onClick={toggleDrawer(true)}
            >
              <FilterListIcon className={classes.extendedIcon} />
              FILTRAR
            </Fab>
          </div>
        )}
      </Container>
      <section className={classes.gridContainer}>
        <Container maxWidth='lg'>
          <Grid container spacing={2} className={classes.gridContainer}>
            {benefits.map((beneficio) => (
              <Grid
                key={beneficio.title}
                item
                xs={12}
                md={4}
                className={classes.gridItem}
              >
                <TarjetaBeneficio
                  key={`destacado_${beneficio.id}`}
                  item={beneficio}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <Drawer anchor='left' open={isOpenDrawer} onClose={toggleDrawer(false)}>
        <form role='presentation' onSubmit={handleApply}>
          <Typography
            style={{ margin: '1rem 0', fontWeight: '500' }}
            variant='h4'
            align='center'
            color='primary'
            gutterBottom
          >
            FILTROS
          </Typography>
          <Typography
            style={{ margin: '1rem' }}
            variant='body1'
            align='center'
            color='inherit'
            paragraph
            gutterBottom
          >
            Encuentre el beneficio que busca
          </Typography>
          <List>
            <ListItem>
              <FormControl fullWidth>
                <InputLabel id='type-label'>Rubro</InputLabel>
                <Select
                  labelId='type-label'
                  id='type-select'
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  {benefitTypes.map((type) => (
                    <MenuItem key={`${type.id}_${type.name}`} value={type.id}>
                      {type.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl fullWidth>
                <InputLabel id='locality-label'>Localidad</InputLabel>
                <Select
                  labelId='locality-label'
                  id='locality-select'
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                >
                  {localities.map((city) => (
                    <MenuItem key={`${city.id}_${city.name}`} value={city.id}>
                      {city.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl fullWidth>
                <InputLabel id='vendor-label'>Proveedor</InputLabel>
                <Select
                  labelId='vendor-label'
                  id='vendor-select'
                  value={vendorFilter}
                  onChange={(e) => setVendorFilter(e.target.value)}
                >
                  {suppliers.map((vendor) => (
                    <MenuItem
                      key={`${vendor.id}_${vendor.name}`}
                      value={vendor.id}
                    >
                      {vendor.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </ListItem>
          </List>
          <Divider />
          <ListItem>
            <Button fullWidth color='primary' variant='contained' type='submit'>
              Aplicar
            </Button>
          </ListItem>
          <ListItem>
            <Button
              fullWidth
              color='primary'
              variant='outlined'
              onClick={handleClear}
              type='button'
            >
              Limpiar
            </Button>
          </ListItem>
        </form>
      </Drawer>
    </>
  );
};

export default Beneficios;

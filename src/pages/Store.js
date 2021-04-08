import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import service from '../clientService/DigiSellService';
import Grid from '@material-ui/core/Grid';
import Cookies from 'universal-cookie';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    marginTop: 50,
    marginLeft: 300,
    top: "50%",
    left: "50%",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cookies = new Cookies();

export default function Album(event) {

  const [products, setProducts] = useState([]);
  const [cart] = useState([]);
  const classes = useStyles();
  const [user, setUser] = useState();

  const fetchData = async () => {

    let productsArray = await service.getProducts();
    setUser(cookies.get('user'))
    console.log("Products", productsArray)
    setProducts(productsArray)
  }

  const addToCart = (product) => {
    alert(product.productName + " was added to the cart")
    cart.push(product);
  }

  const checkout = async () => {
    await service.checkout(cart)
    while (cart.length > 0) {
      cart.pop();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to DigiSell Store {user?.firstName}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Buy our products! They are all very high quality! <br /> No refunds.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <div>
            <Grid container>
              <Grid xs={2}></Grid>
              <Grid className={classes.card}>
                <Grid container spacing={2} direction='row'>
                  {products?.map((product) =>
                    <Grid item key={product._id} >
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {product?.productName}
                          </Typography>
                          <Typography>
                            {product?.productDescription}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button  onClick={() => addToCart(product)} size="small" color="primary">
                            Add
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  )}
                </Grid>
            </Grid>
            </Grid>
            <Button onClick={() => checkout()} className={classes.margin} variant="contained" size="large" color="primary">
              Check Out
            </Button>
          </div>
        <br />
        </Container>
      </main>
      {/* Footer */ }
  <footer className={classes.footer}>
    <Typography variant="h6" align="center" gutterBottom>
      DigiSell
        </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      Legal stuff here.
        </Typography>
    <Copyright />
  </footer>
  {/* End footer */ }
    </React.Fragment >
  );
}
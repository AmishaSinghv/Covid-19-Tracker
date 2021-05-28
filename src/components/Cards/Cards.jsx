import React from 'react';
import { Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
const Cards = (props)=>{
    console.log(props);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component ={Card}>
                <CardContent>
                    <Typography color ="textSecondary" gutterBottom>Infected</Typography>
                   <Typography variant="h5">REAL DATA</Typography>
                    <Typography color="textSecondary">REAL DATE</Typography>
                    <Typography variant="body2">NUmber of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card}>
                <CardContent>
                    <Typography color ="textSecondary" gutterBottom>recovered</Typography>
                   <Typography variant="h5">REAL DATA</Typography>
                    <Typography color="textSecondary">REAL DATE</Typography>
                    <Typography variant="body2">NUmber of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card}>
                <CardContent>
                    <Typography color ="textSecondary" gutterBottom>deaths</Typography>
                   <Typography variant="h5">REAL DATA</Typography>
                    <Typography color="textSecondary">REAL DATE</Typography>
                    <Typography variant="body2">NUmber of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
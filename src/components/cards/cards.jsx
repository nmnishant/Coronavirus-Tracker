import React from 'react'

import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import cx from 'classnames'
import CountUp from 'react-countup'

import styles from './cards.module.css'


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading...'
    }

    //console.log(props)
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                seperator=","
                            >
                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No. of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                seperator=","
                            >
                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No. of recoveries</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                seperator=","
                            >
                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No. of deathss</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards
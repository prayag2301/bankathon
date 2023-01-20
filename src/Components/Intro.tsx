import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import styles from "../styles/Home.module.css";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Head from 'next/head'

type Props = {}

function Intro({}: Props) {
  return (
    <>
      <Head>
        <title>Create Next App With SubZero</title>
      </Head>{" "}
        <Typography className={styles.header1}>Payback Personal Loans</Typography>

        {/* <div>
            Hey User
        </div>
        <div>
            <p>Get Upto</p>
            <p>R 5,00,000</p>
            <p>starting @10.49% p.a.</p>

            <div>
                <ul>
                    <li>Instant Disbursal</li>
                    <li>Minimal Documentation</li>
                    <li>Gauranteed Cashback</li>
                </ul>
            </div>
        </div> */}
        <Grid>
            <Grid item xs={4}>
            <ul>
                    <li>Instant Disbursal</li>
                    <li>Minimal Documentation</li>
                    <li>Gauranteed Cashback</li>
                </ul>
            </Grid>
        </Grid>
        <Grid>
            Need Loan for 
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                    <Card1 />
                    </Grid>
                    <Grid item xs={6}>
                    <Card2 />
                    </Grid>
                    <Grid item xs={6}>
                    <Card3 />
                    </Grid>
                    <Grid item xs={6}>
                    <Card4 />
                    </Grid>
                </Grid>
            </Box>
        </Grid>

        <Button className={styles.logbtn} variant="contained" size="large">
        Login
      </Button>
    </>
  )
}

export default Intro
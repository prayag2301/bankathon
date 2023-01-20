import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container } from "@material-ui/core";
import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App With SubZero</title>
      </Head>
      <Typography className={styles.header1}>Payback Personal Loans</Typography>

      <Grid container s>
        <Grid item xs={4}>
          <Avatar
            className={styles.ava}
            alt="Bot"
            src="/static/images/avatar/2.jpg"
          />
        </Grid>
        <Grid item xs={8}>
          <Card
            style={{ height: "58px", padding: "0%", margin: "0%" }}
            sx={{ maxWidth: "225px" }}
          >
            <CardContent
              style={{
                height: "58px",
                padding: "0%",
                margin: "0%",
                paddingLeft: "11px",
                color: "black",
              }}
            >
              <Typography style={{ fontSize: "12px" }}>Hey,</Typography>
              <Typography
                style={{ fontSize: "12px", color: "black" }}
                variant="body2"
                color="text.secondary"
              >
                Please help me with your - Mobile number & PAN 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container s>
        <Grid item xs={12}>
          <Typography className={styles.ava1}>
            Please enter your Mobile Number and PAN details
          </Typography>
        </Grid>
      </Grid>

      <Grid container s>
        <Grid item xs={12}>
          <TextField
            className={styles.inp}
            id="filled-basic"
            label="Mobile Number"
            variant="filled"
          />
        </Grid>
      </Grid>
      <Grid container s>
        <Grid item xs={12}>
          <TextField
            className={styles.inp2}
            id="filled-basic"
            label="PAN Number"
            variant="filled"
          />
        </Grid>
      </Grid>
      <Grid container s>
        <Grid item xs={12}>
          <TextField
            className={styles.inp3}
            id="filled-basic"
            label="Aadhar Number"
            variant="filled"
          />
        </Grid>
      </Grid>
      <Button className={styles.logbtn} variant="contained" size="large">
        Login
      </Button>
    </>
  );
};

export default Home;

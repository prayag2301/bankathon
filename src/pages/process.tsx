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
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import mypic from "../asset/check.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App With SubZero</title>
      </Head>{" "}
      <Typography className={styles.header1}></Typography>
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
              <Typography style={{ fontSize: "12px" }}>
                Hey Shubham, I am Saathi!! 
              </Typography>
              <Typography
                style={{ fontSize: "12px", color: "black" }}
                variant="body2"
                color="text.secondary"
              >
                I’ll help you through the application process 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "56px" }} s>
        <Grid item xs={4}>
          <div className={styles.tick}>
            <Image src={mypic} alt="check" width={25} height={25} />
          </div>
        </Grid>
        <Grid item xs={8}>
          <Typography className={styles.ava2}>
            Enter Personal Details
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "31px" }} s>
        <Grid item xs={4}>
          <div className={styles.tick}>
            <Image src={mypic} alt="check" width={25} height={25} />
          </div>
        </Grid>
        <Grid item xs={8}>
          <Typography className={styles.ava2}>
            Select Loan amount & tenure
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "31px" }} s>
        <Grid item xs={4}>
          <div className={styles.tick}>
            <Image src={mypic} alt="check" width={25} height={25} />
          </div>
        </Grid>
        <Grid item xs={8}>
          <Typography className={styles.ava2}>
            Fill Bank Details for Disbursement
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "31px" }} s>
        <Grid item xs={4}>
          <div className={styles.tick}>
            <Image src={mypic} alt="check" width={25} height={25} />
          </div>
        </Grid>
        <Grid item xs={8}>
          <Typography className={styles.ava2}>Get VKYC done</Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "31px" }} s>
        <Grid item xs={4}>
          <div className={styles.tick}>
            <Image src={mypic} alt="check" width={25} height={25} />
          </div>
        </Grid>
        <Grid item xs={8}>
          <Typography className={styles.ava2}>Esign to confirm</Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "80px", padding: "0%" }} s>
        <Grid item xs={2}>
          <div className={styles.tick}>
            <Checkbox defaultChecked color="default" />
          </div>
        </Grid>
        <Grid item xs={8}>
          <Typography className={styles.ava3}>
            I agree to Terms & Conditions to let Saathi handle  automated form
            filling process further.
          </Typography>
        </Grid>
      </Grid>
      <Button className={styles.logbtn} variant="contained" size="large">
        Proceed
      </Button>
    </>
  );
};

export default Home;

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
import Checkbox from "@mui/material/Checkbox";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App With SubZero</title>
      </Head>
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
            style={{
              height: "75px",
              padding: "0%",
              margin: "0%",
              backgroundColor: "#FAFAFA",
              marginLeft: "-14px",
            }}
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
              <Typography style={{ fontSize: "12px", marginTop: "2px" }}>
                Great Rahul!
              </Typography>
              <Typography
                style={{ fontSize: "13px", color: "black", fontWeight: "700" }}
                variant="body2"
                color="text.secondary"
              >
                Please check all the information before we proceed to the loan
                disbursal
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography
        style={{
          fontSize: "10px",
          marginTop: "24px",
          marginLeft: "30px",
          color: "#4F5D75",
          fontWeight: "400",
        }}
      >
        You are
      </Typography>
      <Typography
        style={{
          fontSize: "12px",
          color: "#2D3142",
          fontWeight: "700",
          marginLeft: "30px",
        }}
        variant="body2"
        color="text.secondary"
      >
        Rahul Jain
      </Typography>
      <Typography
        style={{
          fontSize: "10px",
          marginTop: "24px",
          marginLeft: "30px",
          color: "#4F5D75",
          fontWeight: "400",
        }}
      >
        Your Aadhar number is
      </Typography>
      <Typography
        style={{
          fontSize: "12px",
          color: "#2D3142",
          fontWeight: "700",
          marginLeft: "30px",
        }}
        variant="body2"
        color="text.secondary"
      >
        2110 3434 5656
      </Typography>

      <Typography
        style={{
          fontSize: "10px",
          marginTop: "24px",
          marginLeft: "30px",
          color: "#4F5D75",
          fontWeight: "400",
        }}
      >
        Your PAN
      </Typography>
      <Typography
        style={{
          fontSize: "12px",
          color: "#2D3142",
          fontWeight: "700",
          marginLeft: "30px",
        }}
        variant="body2"
        color="text.secondary"
      >
        TYUJL9087J
      </Typography>

      <Typography
        style={{
          fontSize: "10px",
          marginTop: "24px",
          marginLeft: "30px",
          color: "#4F5D75",
          fontWeight: "400",
        }}
      >
        Your mobile number
      </Typography>
      <Typography
        style={{
          fontSize: "12px",
          color: "#2D3142",
          fontWeight: "700",
          marginLeft: "30px",
        }}
        variant="body2"
        color="text.secondary"
      >
        +91 96969 96969
      </Typography>

      <Typography
        style={{
          fontSize: "10px",
          marginTop: "24px",
          marginLeft: "30px",
          color: "#4F5D75",
          fontWeight: "400",
        }}
      >
        Date of Birth
      </Typography>
      <Typography
        style={{
          fontSize: "12px",
          color: "#2D3142",
          fontWeight: "700",
          marginLeft: "30px",
        }}
        variant="body2"
        color="text.secondary"
      >
        06 March 1986
      </Typography>

      <Typography
        style={{
          fontSize: "10px",
          marginTop: "24px",
          marginLeft: "30px",
          color: "#4F5D75",
          fontWeight: "400",
        }}
      >
        RESIDENTIAL Address
      </Typography>
      <Typography
        style={{
          fontSize: "12px",
          color: "#2D3142",
          fontWeight: "700",
          marginLeft: "30px",
        }}
        variant="body2"
        color="text.secondary"
      >
        202, Tulip, Atur Co-operative Housing Society, Sangamvadi, Pune,
        Maharashtra 411001
      </Typography>

      <Typography
        style={{
          fontSize: "10px",
          marginTop: "24px",
          marginLeft: "30px",
          color: "#4F5D75",
          fontWeight: "400",
        }}
      >
        Insurance PREMIUM
      </Typography>
      <Typography
        style={{
          fontSize: "12px",
          color: "#2D3142",
          fontWeight: "700",
          marginLeft: "30px",
        }}
        variant="body2"
        color="text.secondary"
      >
        06 March 1986
      </Typography>
      <Grid container style={{ marginTop: "16px", padding: "0%" }} s>
        <Grid item xs={2}>
          <div className={styles.tick}>
            <Checkbox defaultChecked color="default" />
          </div>
        </Grid>
        <Grid item xs={8}>
          <Typography
            style={{ fontSize: "10px", marginLeft: "10px", marginTop: "14px" }}
          >
            I am a citizen of India
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "8px", padding: "0%" }} s>
        <Grid item xs={2}>
          <div className={styles.tick}>
            <Checkbox defaultChecked color="default" />
          </div>
        </Grid>
        <Grid item xs={8}>
          <Typography
            style={{ fontSize: "10px", marginLeft: "10px", marginTop: "4px" }}
          >
            I authorise the bank & it's representatives to contact me for
            anything related to the loan process.
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "2px", padding: "0%" }} s>
        <Grid item xs={2}>
          <div className={styles.tick}>
            <Checkbox defaultChecked color="default" />
          </div>
        </Grid>
        <Grid item xs={8}>
          <Typography
            style={{ fontSize: "10px", marginLeft: "10px", marginTop: "14px" }}
          >
            I am a citizen of India
          </Typography>
        </Grid>
      </Grid>

      <Button className={styles.logbtn} variant="contained" size="large">
        Done
      </Button>
    </>
  );
};

export default Home;

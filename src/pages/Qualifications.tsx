import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import DoneIcon from '@mui/icons-material/Done';
import Image from "next/image";
import mask from "../../public/mask.png"

type Props = {}

function Qualifications({}: Props) {
  return (
    <>
      <Head>
        <title>Create Next App With SubZero</title>
      </Head>{" "}
      <Grid container style={{ padding: "16px", margin: "16px" }}>
        <Grid item xs={4}>
          <Image
            className={styles.ava}
            alt=""
            src={mask}
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
              <Typography style={{ fontSize: "12px" }}>Hey Shubham I am Saathi!</Typography>
              <Typography
                style={{ fontSize: "12px", color: "black" }}
                variant="body2"
                color="text.secondary"
              >
                I'll help you through your application process
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemText primary="PAN" />
        <DoneIcon />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemText primary="Mobile Number"  />
        <DoneIcon />
      </ListItem>
    </List>
            
    <Grid container style={{ padding: "16px", margin: "16px" }}>
        <Grid item xs={4}>
          <Image
            className={styles.ava}
            alt=""
            src={mask}
          />
        </Grid>
        <Grid item xs={8}>
          <Card
            style={{ height: "70px", padding: "0%", margin: "0%" }}
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
              <Typography style={{ fontSize: "12px" }}>Shubham!!</Typography>
              <Typography
                style={{ fontSize: "12px", color: "black" }}
                variant="body2"
                color="text.secondary"
              >
                Can I get some information from you to <b>customize this journey ahead</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography style={{ padding: '16px', fontSize: '16px'}}>May I know your occupation?</Typography>
        

    <ButtonGroup color='secondary' variant="outlined">
        <Button style={{ color: '#97144d'}}>Self Employed</Button>
        <Button style={{ color: '#97144d'}}>Salaried</Button>
    </ButtonGroup>

    <Typography style={{ padding: '16px', fontSize: '16px'}}>Your Annual Income</Typography>

    <Grid item xs={12}>
          <TextField
            className={styles.inp2}
            id="filled-basic"
            label="eg 5,00,000"
            variant="filled"
          />
        </Grid>

        <Button className={styles.logbtn} variant="contained" size="large">
        Login
      </Button>
    
    </>

    

  )
}

export default Qualifications
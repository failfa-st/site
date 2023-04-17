import { useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import dynamic from "next/dynamic";
import { useColorScheme } from "@mui/material/styles";
import { getTheme } from "@/utils";
import Head from "next/head";
import Footer from "@/atoms/footer";
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Unstable_Grid2 as Grid,
  Typography,
} from "@mui/material";

export default function Home() {
  const { mode, systemMode } = useColorScheme();

  return (
    <>
      <Container>
        <Stack sx={{ alignItems: "center", height: "100vh" }}>
          <Box sx={{ flex: 1 }}>
            <Box
              component="svg"
              viewBox="0 0 24 24"
              sx={{ height: "100%", width: "100%" }}
            >
              <path
                fill="currentColor"
                d="m8,12c-.55,0-1-.45-1-1,0,0,0,0,0,0h-1v-1h4v1h-1s0,0,0,0c0,.55-.45,1-1,1Zm-4-2v4l.97,1.56-.02-4.03-.96-1.53Zm4,8h4v-1h-4v1Zm4,2v2s3,0,3,0l2.5-4h-4.3l-1.2,2Zm8-12v6l-1.28,2.05-4.33-.04.61-1.01h-3s0-13,0-13c7,0,8,6,8,6Zm-2,3l-2-2-2,2.01,2,1.99,2-2Zm-7,4h-1v1h1v-1Z"
              />
            </Box>
          </Box>
          <Typography variant="h3" mb={2}>
            failfa.st
          </Typography>

          <Typography variant="h5" mb={4}>
            rapid AI-powered development & innovation
          </Typography>
        </Stack>

        <Grid container columns={{ md: 2, xl: 3 }}>
          <Grid xs={1}>
            <Card
              component="a"
              href="https://github.com/failfa-st"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
              }}
            >
              <CardHeader title="Open Source"></CardHeader>
              <CardContent>
                <Typography>
                  Open source is our path to the future. By sharing our code, we
                  foster collaboration and create scalable and secure solutions.
                  Join us on our journey to make open source the way to go for a
                  better tomorrow.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={1}>
            <Card
              component="a"
              href="https://youtube.com/@failfa-st"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
              }}
            >
              <CardHeader title="Experience"></CardHeader>
              <CardContent>
                <Typography>
                  Check out our YouTube channel to see our AI software and
                  projects in action. Don&apos;t miss out on the latest
                  developments in technology and innovation!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={1}>
            <Card
              component="a"
              href="https://discord.gg/m3TBB9XEkb"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
              }}
            >
              <CardHeader title="Connect"></CardHeader>
              <CardContent>
                <Typography>
                  Join our Discord server and become part of our community of
                  early adopters. We believe in supporting each other as we
                  explore the latest frontiers in technology.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

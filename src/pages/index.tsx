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
import { Container, Typography } from "@mui/material";

export default function Home() {
  const { mode, systemMode } = useColorScheme();

  return (
    <>
      <Container>
        <Stack sx={{ alignItems: "center" }}>
          <Typography variant="h1">failfast</Typography>
          <Typography variant="h4">
            Rapid AI-powered development & innovation
          </Typography>
        </Stack>
      </Container>

      <div>
        <a
          href="https://github.com/failfa-st"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Open Source <span>🤖</span>
          </h2>
          <p>
            Explore our GitHub organization, where you&apos;ll find all of our
            open source projects. Contribute, collaborate, and stay up-to-date
            with the latest in failfast innovations.
          </p>
        </a>

        <a
          href="https://youtube.com/@failfa-st"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn & Experience <span>🎥</span>
          </h2>
          <p>
            Experience the fascinating world of failfast through our YouTube
            channel, demonstrating our tools in action and the power of
            AI-driven development. Keep an eye out for more insightful updates!
          </p>
        </a>

        <a
          href="https://discord.gg/m3TBB9XEkb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Connect & Grow <span>💬</span>
          </h2>
          <p>
            Join our thriving Discord community to connect with like-minded
            people, share ideas, and collaborate on exciting AI-driven projects.
            Be part of the failfast family!
          </p>
        </a>
      </div>

      <Footer />
    </>
  );
}

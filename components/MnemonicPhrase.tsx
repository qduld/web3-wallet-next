/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { title } from "@/components/primitives";
import { experimentalStyled as styled } from "@mui/material/styles";
import useUserStore from "@/store/useUserStore";
import Container from "@mui/material/Container";
import useSettingStore from "@/store/useSettingStore";

export default function MnemonicPhrase() {
  const { mnemonicPhrase } = useUserStore();
  const { dictionary } = useSettingStore();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return mnemonicPhrase ? (
    <Container className="flex flex-col items-center justify-center gap-4">
      <Box component="section">
        <h1 className={title({ size: "sm" })}>{dictionary.mnemonic}</h1>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(mnemonicPhrase).map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item className="flex justify-between">
              <i>{index + 1}</i>
              {item}
            </Item>
          </Grid>
        ))}
      </Grid>
      <Box component="section">
        <h5>{dictionary.mnemonicSaveTips}</h5>
      </Box>
    </Container>
  ) : (
    ""
  );
}

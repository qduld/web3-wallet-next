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
import { Button } from "@mui/material";
// import * as bip39 from "bip39";

interface IMnemonicItem {
  index: string | number;
  value: string;
}

export default function ConfirmMnemonic() {
  // const hdkey = require("hdkey");

  const { mnemonicPhrase, pwd } = useUserStore();
  const { dictionary } = useSettingStore();

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const [errorTips, setErrorTips] = React.useState("");

  const mnemonicItemHandleClick = (mnemonicItem: IMnemonicItem) => {
    if (mnemonicItem.index) return;
    setCurrentIndex(currentIndex + 1);
    mnemonicItem.index = currentIndex + 1;
  };

  const mnemonicPhraseString = mnemonicPhrase.join(" ");
  /* 组装排序后的助记词 */
  const orgMnemonicListString = () => {
    const sortMnemonicList = mnemonicList.slice();
    sortMnemonicList.sort(
      (prev, next) => Number(prev.index) - Number(next.index)
    );
    return sortMnemonicList.map((item) => item.value).join(" ");
  };

  // const generateWallet = async (mnemonic: string) => {
  //   const seed = await bip39.mnemonicToSeed(mnemonic);
  //   const hdWallet = hdkey.fromMasterSeed(seed);
  //   const wallet = hdWallet.derive("m/44'/60'/0'/0/0");

  //   const lowerCaseAddress = wallet.getAddressString();
  //   const checkSumAddress = wallet.getChecksumAddressString();
  //   const privateKey = wallet.getPrivateKey().toString("hex");
  //   const keyStore = await wallet.toV3(pwd);

  //   const walletInfo = {
  //     address: lowerCaseAddress,
  //     privateKey,
  //     keyStore,
  //     mnemonic,
  //     balance: 0,
  //   };

  //   console.log(walletInfo);
  // };

  const confirmMnemonicHandleClick = () => {
    if (orgMnemonicListString() !== mnemonicPhraseString) {
      setErrorTips(dictionary.mnemonicErrorTips);
      return;
    }
    // generateWallet(mnemonicPhraseString);
  };

  const [mnemonicList, setMnemonicList] = React.useState([] as IMnemonicItem[]);

  React.useEffect(() => {
    setMnemonicList(
      mnemonicPhrase
        .sort(() => Math.random() - 0.5)
        .map((mnemonicItem) => {
          return { index: "", value: mnemonicItem };
        })
    );
  }, []);

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
        {Array.from(mnemonicList).map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item
              className="flex justify-between"
              onClick={() => mnemonicItemHandleClick(item)}
            >
              <i>{item.index}</i>
              {item.value}
            </Item>
          </Grid>
        ))}
      </Grid>
      <Box
        component="section"
        className="flex flex-col items-center justify-center"
      >
        <h5>{dictionary.confirmMnemonicTips}</h5>
        <h6>{errorTips}</h6>
        <Button
          variant="contained"
          className="bg-sky-700 mt-6"
          onClick={confirmMnemonicHandleClick}
        >
          {dictionary.common.ok}
        </Button>
      </Box>
    </Container>
  ) : (
    ""
  );
}

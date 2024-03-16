/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import AppBar from "@/components/common/AppBar";
import { title } from "@/components/primitives";
import { IParams } from "@/locale/locale";
import useSettingStore from "@/store/useSettingStore";
import CreateWalletDialog from "@/components/dialog/CreateWalletDialog";
import { useDialog } from "@/hooks/useDialog";

export default function Home({ params: { locale } }: IParams) {
  const { dictionary } = useSettingStore();
  const { isDialogVisible, openDialog, closeDialog } = useDialog();

  const githubHref = "https://github.com/qduld";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-sky-100">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <AppBar />
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 lg:w-screen">
          <div className="justify-center inline-block max-w-lg text-center">
            <h1 className={title()}>Create a&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>wallet&nbsp;</h1>
            <br />
            <h1 className={title()}>a web3 wallet by myself to learn web3</h1>
          </div>

          <div className="flex gap-3">
            <Link href="#" underline="hover">
              <Button
                variant="contained"
                className="bg-sky-700"
                onClick={openDialog}
              >
                {dictionary.createWallet}
              </Button>
              <CreateWalletDialog
                open={isDialogVisible}
                handleClose={closeDialog}
              ></CreateWalletDialog>
            </Link>
            <Link href={githubHref}>
              <Button variant="outlined">{dictionary.importWallet}</Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

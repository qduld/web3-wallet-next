import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Toolbar from "../Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import LangSwitch from "./LangSwitch";
import logo from "@/source/logo.png";
import { title } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { githubHref } from "@/model/const";
import Link from "@mui/material/Link";

export default function AppAppBar() {
  return (
    <React.Fragment>
      <MuiAppBar elevation={0} position="relative">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }}>
            <Image src={logo} height={50} width={50} alt={"DL wallet"} />
          </Box>
          <Box sx={{ flex: "auto", textAlign: "center" }} className={title()}>
            DL Wallet
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <LangSwitch />
            <Link href={githubHref} className="text-white">
              <GithubIcon size={20} className="cursor-pointer" />
            </Link>
          </Box>
        </Toolbar>
      </MuiAppBar>
    </React.Fragment>
  );
}

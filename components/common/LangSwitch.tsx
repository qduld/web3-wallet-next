/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useCookies } from "react-cookie";
import { languageCookieName } from "@/middleware";
import { TLanguage, fallbackLng } from "@/locale/locale";
import useSettingStore from "@/store/useSettingStore";

export default function LangSwitch() {
  const { setDefaultLocale, setLocale, locale, locales, setDictionary } =
    useSettingStore();

  const [languageCookie, setLanguageCookie] = useCookies([languageCookieName]);

  React.useEffect(() => {
    if (!languageCookie) setDefaultLocale(fallbackLng);
    else setDefaultLocale(fallbackLng);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (language: TLanguage) => {
    /* 点击空白, language为event */
    if (typeof language === "string") {
      setLocale(language);
      setLanguageCookie(languageCookieName, language);
      setDictionary(language);
    }
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        className="text-white"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span className="text-white">{locale}</span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {locales.map((language) => (
          <MenuItem
            onClick={() => handleClose(language as TLanguage)}
            key={language}
          >
            {language}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

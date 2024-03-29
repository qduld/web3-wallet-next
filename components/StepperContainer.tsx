/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import useSettingStore from "@/store/useSettingStore";
import WalletOptions from "./WalletOptions";
import MnemonicPhrase from "./MnemonicPhrase";
import ConfirmMnemonic from "./ConfirmMnemonic";
import useUserStore from "@/store/useUserStore";

enum EComponentNameList {
  WalletOptions = "WalletOptions",
  MnemonicPhrase = "MnemonicPhrase",
  ConfirmMnemonic = "ConfirmMnemonic",
}

const componentsList = [
  EComponentNameList.WalletOptions,
  EComponentNameList.MnemonicPhrase,
  EComponentNameList.ConfirmMnemonic,
];

const renderComponentsList = (component: EComponentNameList) => {
  switch (component) {
    case EComponentNameList.WalletOptions:
      return <WalletOptions />;
    case EComponentNameList.MnemonicPhrase:
      return <MnemonicPhrase />;
    case EComponentNameList.ConfirmMnemonic:
      return <ConfirmMnemonic />;
  }
};

export default function TextMobileStepper() {
  const { pwd } = useUserStore();
  const { dictionary, activeStep, setActiveStep } = useSettingStore();
  const theme = useTheme();

  React.useEffect(() => {
    if (!pwd) setActiveStep(0);
  }, []);

  const maxSteps = componentsList.length;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const checkedStepDisabled = (currentStep: number): boolean => {
    if (currentStep === maxSteps - 1) return true;
    if (
      componentsList[currentStep] === EComponentNameList.WalletOptions &&
      !pwd
    )
      return true;
    return false;
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "white",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ minHeight: "36rem" }}
        className="md:border-stone-100 md:border-2 md:border-solid md:rounded-xl sm:border-none
        max-w-xl flex p-2 flex-col justify-between"
      >
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "background.default",
            flex: 1,
          }}
        >
          {renderComponentsList(componentsList[activeStep])}
        </Paper>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={checkedStepDisabled(activeStep)}
            >
              {dictionary.common.next}
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              {dictionary.common.back}
            </Button>
          }
        />
      </Box>
    </Box>
  );
}

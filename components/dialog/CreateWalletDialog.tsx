import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useSettingStore from "@/store/useSettingStore";
import useUserStore from "@/store/useUserStore";

interface ICreateWalletDialogProps {
  open: boolean;
  handleClose: () => void;
}

export default function CreateWalletDialog(props: ICreateWalletDialogProps) {
  const { dictionary, setActiveStep } = useSettingStore();
  const { setPwd, generateMnemonicPhrase } = useUserStore();
  const { open, handleClose } = props;

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth={true}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            setPwd(formJson.password);
            generateMnemonicPhrase();
            setActiveStep(1);
            handleClose();
          },
        }}
      >
        <DialogTitle>{dictionary.login.plsInputPwd}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="password"
            label={dictionary.login.pwd}
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{dictionary.common.cancel}</Button>
          <Button type="submit">{dictionary.common.ok}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

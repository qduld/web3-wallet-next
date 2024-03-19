import CreateWalletDialog from "@/components/dialog/CreateWalletDialog";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { title } from "@/components/primitives";
import useSettingStore from "@/store/useSettingStore";
import { useDialog } from "@/hooks/useDialog";
import { githubHref } from "@/model/const";

export default function WalletOptions() {
  const { dictionary } = useSettingStore();
  const { isDialogVisible, openDialog, closeDialog } = useDialog();

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 lg:w-screen">
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
  );
}

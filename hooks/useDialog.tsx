import { useBool } from "./useBool";

export interface IUseDialogParams {
  closeDialog: () => void;
  openDialog: () => void;
  isDialogVisible: boolean;
  reverseDialogVisible: () => void;
}

export function useDialog(defaultVal?: boolean) {
  const { data, changeToFalse, changeToTrue, reverse } = useBool(
    defaultVal ? defaultVal : false
  );

  return {
    closeDialog: changeToFalse,
    openDialog: changeToTrue,
    isDialogVisible: data,
    reverseDialogVisible: reverse,
  };
}

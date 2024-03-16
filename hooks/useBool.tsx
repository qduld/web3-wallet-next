import { useState } from "react";

// 弹框相关
export function useBool(defaultVal: boolean) {
  const [data, setData] = useState(defaultVal || false);
  function changeToFalse() {
    setData(false);
  }

  function changeToTrue() {
    setData(true);
  }

  function reverse() {
    setData(!data);
  }

  return {
    data,
    changeToFalse,
    changeToTrue,
    reverse,
  };
}

export function useShow(defaultVal: boolean) {
  const { data, changeToFalse, changeToTrue } = useBool(defaultVal);

  return {
    isShow: data,
    hide: changeToFalse,
    show: changeToTrue,
  };
}

export function useLoading(defaultVal: boolean) {
  const { data, changeToFalse, changeToTrue } = useBool(defaultVal);

  return {
    isLoading: data,
    closeLoading: changeToFalse,
    openLoading: changeToTrue,
  };
}

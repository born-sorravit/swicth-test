import { useAccount } from "wagmi";

import { Account, Connect, NetworkSwitcher, SignMessage } from "./components";

export function App() {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (typeof window !== "undefined") {
    (window as any).global = window;
    global.Buffer = global.Buffer || require("buffer").Buffer;
    (window as any).process = {
      version: "",
    };
  }
  return (
    <>
      <Connect />

      {address && (
        <>
          <Account />
          <NetworkSwitcher />
          <SignMessage />
        </>
      )}
    </>
  );
}

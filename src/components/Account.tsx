import { useAccount, useEnsName } from "wagmi";

export function Account() {
  const { address, isConnecting, isDisconnected } = useAccount();

  const { data: ensNameData } = useEnsName({ address: address });

  return (
    <div>
      {ensNameData ?? address}
      {ensNameData ? ` (${address})` : null}
    </div>
  );
}

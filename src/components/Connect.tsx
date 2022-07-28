import { useConnect, useDisconnect, useAccount } from "wagmi";

export function Connect() {
  const { connector: activeConnector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div>
      <div>
        {activeConnector && (
          <button onClick={() => disconnect()}>
            Disconnect from {activeConnector.name}
          </button>
        )}

        {connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {isLoading &&
              pendingConnector?.id === connector.id &&
              " (connecting)"}
          </button>
        ))}
      </div>

      {error && <div>{error.message}</div>}
    </div>
  );
}

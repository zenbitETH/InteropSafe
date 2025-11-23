# InteropSAFE

**InteropSAFE** is an experimental dapp built for the [ETH Buenos Aires Hackathon](https://ethglobal.com/showcase/interopsafe-6mos8) stack that explores how the **Ethereum Interoperability Layer (EIL)** can reduce UX friction for multisig-style treasury operations across multiple chains.

Instead of forcing DAO treasurers and multisig signers to juggle multiple UIs and networks, InteropSAFE aims to provide a single, clean interface to:

- Create an “Interop Safe” that can exist on multiple chains.
- Select and manage existing multisigs.
- Configure members and thresholds.
- Review transaction and signer history.
- Experiment with simple batch distributions powered by the EIL SDK.

> ⚠️ **Note:** The current EIL SDK runs on a Tenderly forked environment and some features (like Safe proxies) are not yet available. Because of this, the project focuses on the UX and flow for interoperable multisigs and batch payouts, with progressively deeper integration as the underlying infra matures.

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- pnpm / npm / yarn (examples below use **npm**)

Make sure you have your environment variables set if needed (for wallet / RPC configs, etc.), and that your chains match the EIL deployment configuration (e.g., `deployment/flags.json` and `getMultiChainConfig()`).

### Install Dependencies

```bash
npm install
```

### Run the Dev Server

```bash
npm run dev
```

By default Vite will start on `http://localhost:5173` (or the next available port).  
Open it in your browser and connect your wallet via the **Connect** button.

---

## Project Status

InteropSAFE is a **work in progress** prototype:

- ✅ UX flows for multi-chain Safe selection, creation, and history.
- ✅ Basic wiring for EIL SDK + multi-chain config.
- 🔄 Next steps:
  - Deeper integration with `CrossChainSdk` and `CrossChainExecutor`.
  - Real EIL-backed Safe deployments once Safe proxies & related infra are live.
  - Completing the batch distribution flow for USDC/ETH to multiple recipients.

---

## Links

- ETHGlobal showcase: https://ethglobal.com/showcase/interopsafe-6mos8
- EIL docs: https://docs.ethereuminteroplayer.com/sdk/basics.html

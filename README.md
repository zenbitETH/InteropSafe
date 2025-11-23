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

## Screens & Flows

The following describes the main screens (matching the design mockups in `/design` or screenshots):

### 1. Home – “Create an InteropSAFE”


The landing screen introduces the concept:

- Brand and logo for **InteropSAFE**.
- A wallet **Connect** button (via Reown AppKit + Wagmi) anchored in the top-right.
- Center hero with the tagline:  
  **“Create an InteropSAFE – Same Safe Address on multiple chains with one click”**.

From here, a connected user can move into Safe selection or creation flows.

---

### 2. Select an Existing Safe


Once connected, the user sees a card listing existing Safes associated with their account:

- Each row shows:
  - Threshold (e.g., `2/4`, `3/5`).
  - Safe address.
  - Chain icons where that Safe exists.
  - An **Open Safe** action.
- A **Create new Safe** button allows the user to start a brand new Interop Safe.

This screen is the “hub” for choosing which multisig to work with.

---

### 3. Create an Interop Safe


The create flow is designed to make multisig configuration intuitive:

- **Add Safe members**  
  - Inputs accept addresses or ENS names (e.g., `zenbit.eth`, `habacuc.eth`).
  - Each row can be removed with a trash icon.
  - **+ Add Owner** adds additional signers.

- **Decision Threshold**  
  - A simple `-` and `+` control to set how many signers are required.
  - Displays the chosen threshold out of the total owners (e.g., `2 / 4 owners`).

- **Choose chains to deploy your multisig**  
  - Checkboxes for chains like Mainnet, OP Mainnet, Base, Arbitrum, and others.
  - The eventual goal is a **shared address across these chains**, orchestrated by EIL.

- **Create iSafe**  
  - Triggers the underlying account & deployment logic (in our current implementation, this is limited by the experimental EIL environment, but the UX is fully prototyped).

---

### 4. Safe Transaction & Signer History


Once a Safe is selected, users can review its activity:

- Table showing:
  - **#** – index or ordering of the operation.
  - **Tx Hash** & type (e.g., transfer funds, add signer).
  - **Date** and time.
  - **Creator** – who initiated the action.
  - **Recipient(s)** – compact list with a “details” view for multiple recipients.
  - **Amount(s)** – including totals and per-recipient values.
  - **Network(s)** – chains involved in the operation.
  - **Signers** – how many signatures are still required (`0/5`, `3/5`, etc.).
  - **Actions** – buttons to `Sign`, `Execute`, or open extra options.

This is where the **EIL CrossChainExecutor** logic eventually feeds status updates back to the UI: pending, completed, and multi-chain execution steps.

---

## EIL Integration (High-Level)

InteropSAFE is wired to experiment with the **EIL SDK**:

- Uses `getMultiChainConfig()` from `@eil-protocol/sdk` to configure networks.
- Integrates with **Reown AppKit + Wagmi** to obtain a `WalletClient` for the user.
- Plans to use:
  - `CrossChainSdk` as the main orchestrator.
  - `CrossChainBuilder` + `BatchBuilder` to build batches per chain.
  - `TransferAction` and `FunctionCallAction` for ERC-20 transfers and custom calls.
  - `CrossChainExecutor` to execute and track multi-chain flows.

Due to current constraints (Tenderly fork, no Safe proxies yet), the live implementation focuses on the **batch distribution UX** and wiring up the basic EIL session, leaving full Safe deployment and multi-chain execution as near‑term follow-ups when infra is ready.

---

## Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Wallet / UX:** Reown AppKit, Wagmi, Viem
- **Interop:** EIL SDK (`@eil-protocol/sdk`, `@eil-protocol/accounts`)
- **Styling:** Tailwind CSS + custom fonts (Timmana, Tilt Neon)
- **Env:** Tenderly fork + supported EIL test networks

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

---

Built by **Habacuc / zenbit.eth** as an exploration of interoperable multisigs and smoother onchain treasury UX.
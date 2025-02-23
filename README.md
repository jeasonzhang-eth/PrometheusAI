<p align="center">
<br />
    <img src="https://raw.githubusercontent.com/jeasonzhang-eth/PrometheusAI/refs/heads/main/pic/PrometheusAI-logo.jpg" width="400" alt=""/>
<br />
</p>
<p align="center"><strong style="font-size: 24px;">⚡ Prometheus AI - Decentralized AI System On ExSAT</strong></p>
<p align="center" style="display: flex; justify-content: center; align-items: center;">
    <span style="display: inline-flex; align-items: center; background-color: #1c1c1c; padding: 5px; border-radius: 6px;">
        <img src="https://img.shields.io/github/stars/jeasonzhang-eth/PrometheusAI?style=social" alt="GitHub stars"/>
        <span style="margin: 0 10px; color: white; font-size: 14px;"></span>
        <img src="https://github.com/turbo-eth/template-web3-app/actions/workflows/ci.yml/badge.svg" alt="CI"/>
        <span style="margin: 0 10px; color: white; font-size: 14px;"></span>
        <img src="https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555" alt="TS"/>
        <span style="margin: 0 10px; color: white; font-size: 14px;"></span>
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT license"/>
        <span style="margin: 0 10px; color: white; font-size: 14px;"></span>
    </span>
</p>

Prometheus AI is a decentralized, modular artificial intelligence system designed to integrate ExSat's blockchain infrastructure, ElizaOS's multi-agent framework, and DeepSeek's advanced inference capabilities.

It aims to create a robust ecosystem where AI computation, decision-making, and interaction are decentralized, transparent, and scalable.

By combining blockchain technology with cutting-edge AI capabilities, Prometheus AI will position ExSat as a leader in the field of decentralized intelligence.

It transforms ExSat from a blockchain infrastructure into a comprehensive platform for building transparent, efficient, and secure autonomous intelligent systems.

### Value to the ExSat Ecosystem

1. Introducing Decentralized AI Applications

    - Enhancing ExSat's Application Layer Ecosystem: Through Prometheus AI, the ExSat network can support more complex decentralized applications (e.g., on-chain financial analysis, smart contract auditing, cross-chain asset management), enriching its ecosystem.
    - Improving User Experience: Prometheus AI offers personalized on-chain assistant services such as real-time BTC asset analysis and dynamic staking suggestions, providing users with more intuitive and efficient interactions.

2. Driving Innovation in BTC Native Asset Management

    - Prometheus AI can leverage ExSat's BTC data indexing capabilities to develop decentralized custody platforms, enabling the secure flow and issuance of BTC native assets.
    - With DeepSeek's inference capabilities, Prometheus AI can provide real-time market analysis and automated trading strategy support for BTCFi applications.

3. Lowering Developer Barriers and Attracting More Participants

    - By utilizing ElizaOS's plugin system, developers can easily extend Prometheus AI's functionality without needing in-depth knowledge of the underlying code to quickly build custom applications.
    - DeepSeek and io.net offer low-cost, high-performance computing power, making large-scale model training and deployment affordable for small and medium-sized development teams.

4. Enhancing ExSat Network Security and Scalability

    - Prometheus AI integrates GoPlus security plugins via ElizaOS to provide professional-grade Web3 security for ExSat.
    - Its decentralized computing architecture reduces reliance on single points of failure, improving the overall stability and scalability of the network.

5. Fostering BTC Ecosystem Integration with Web3

    - Prometheus AI connects BTC with the EVM-compatible ecosystem through intelligent agents, enabling seamless BTC flow across multi-chain environments.

    - It supports native application development based on the UTXO model, injecting more innovation into the Bitcoin ecosystem.


### Technical Architecture

![Technical Architecture](https://raw.githubusercontent.com/jeasonzhang-eth/PrometheusAI/refs/heads/main/pic/Technical%20Architecture.png)

### Core Features

1. ElizaOS-Supported Intelligent Agent System
    - Prometheus AI leverages ElizaOS's plugin-based architecture to develop dedicated plugins for the ExSat network. These plugins enable seamless integration with ExSat's dual-mining mechanism and BTC native asset management functions. Through this integration, Prometheus AI can run intelligent agents on ElizaOS to support complex on-chain interactions and data processing.
2. DeepSeek-Powered Decentralized Computing
    - Prometheus AI deploys DeepSeek models on the io.net decentralized GPU network to leverage its high-performance computing capabilities for large-scale inference and training tasks. DeepSeek's openness and cost efficiency allow Prometheus AI to achieve decentralized computing in a more effective and economical way.
3. Fully Decentralized Computation and Storage
    - By migrating all computational tasks from centralized cloud services to DeepSeek and io.net networks, Prometheus AI achieves truly decentralized AI inference and storage. This architecture not only enhances data privacy but also strengthens system resilience and security.
4. Multi-Modal and Multi-Platform Support
    - Prometheus AI supports multi-modal inputs such as text, voice, and images while integrating with platforms like Telegram, Twitter, Discord via ElizaOS's interface layer for cross-platform intelligent interactions.

### Use Case

- Decentralized Knowledge Graph (DKG) Prometheus AI agents can utilize decentralized knowledge graphs (e.g., OriginTrail DKG) for storing and retrieving knowledge:
    - Insights generated from Bitcoin block data or other on-chain information can be verifiably stored.
    - Agents can achieve collaborative learning through shared memory systems.
- Enhanced Validator Node Operations Validator nodes in the ExSat network can use Prometheus AI to optimize their operations:
    - Predictive analysis of staking strategies based on historical blockchain data.
    - Automated decision-making for transaction validation or block proposals.
- Web3 Native Applications Prometheus AI supports developers in building Bitcoin-based dApps with advanced AI functionalities:
    - Automating smart contracts using DeepSeek inference outputs.
    - Providing personalized financial services through ElizaOS agents integrated with ExSat wallets.

### Roadmap

1. Develop an ExSat plugin to enable ElizaOS to support the ExSat network.
2. Integrate DeepSeek within the Eliza framework.
3. Decentralize all computations by deploying DeepSeek on io.net (or similar networks).

### Getting Started

The `pnpm` CLI is the recommended package manager but `npm` and `yarn` should work too.

```bash
pnpm install
```

#### Development

```bash
pnpm dev
```

#### Build

```bash
pnpm build
```

### Web3 Core

- [WAGMI CLI](https://wagmi.sh/cli/getting-started) - Automatic React Hook Generation
- [RainbowKit](https://www.rainbowkit.com/) - Wallet connection manager
- [Sign-In With Ethereum](https://login.xyz/) - Account authentication

### Web2 Frameworks

- [Vercel](https://vercel.com/) - App Infrastructure
- [Prisma](https://www.prisma.io/) - Database ORM

### Developer Experience

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### User Interface

- [TailwindCSS](https://tailwindcss.com) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Framer Motion](https://www.framer.com/motion/) – Motion library for React to animate components with ease
- [React Icons](https://react-icons.github.io/react-icons) – Beautifully simple, pixel-perfect icons

The [ui.shadcn.com](https://ui.shadcn.com) components are included in the `/components/shared/ui` folder.


### Acknowledgements

Original template was forked from https://github.com/wslyvh/nexth

Thank you @wslyvh 🙏

<hr/>

Copyright 2023 [Kames Geraghty](https://twitter.com/KamesGeraghty)

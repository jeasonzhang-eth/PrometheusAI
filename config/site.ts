// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  localeDefault: string
  links: {
    docs: string
    discord: string
    twitter: string
    github: string
  }
}

export const SITE_CANONICAL = "https://turboeth.xyz"

export const siteConfig: SiteConfig = {
  name: "Prometheus AI",
  title: "By combining blockchain technology with cutting-edge AI capabilities, " +
      "Prometheus AI position ExSat as a leader in the field of decentralized intelligence. \n",
  emoji: "⚡",
  description:
    "Designed to integrate ExSat's blockchain infrastructure, ElizaOS's multi-agent framework, and DeepSeek's advanced inference capabilities. \n",
  localeDefault: "en",
  links: {
    docs: "https://github.com/jeasonzhang-eth/PrometheusAI",
    discord: "https://discord.gg/GqBauEjR",
    twitter: "https://x.com/jeason52",
    github: "https://github.com/jeasonzhang-eth/PrometheusAI",
  },
}

export const DEPLOY_URL =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app&project-name=TurboETH&repository-name=turbo-eth&demo-title=TurboETH&env=NEXTAUTH_SECRET,DATABASE_URL&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app%2Fblob%2Fintegrations%2F.env.example"

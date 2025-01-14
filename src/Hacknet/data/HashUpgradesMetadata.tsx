// Metadata used to construct all Hash Upgrades
import React from "react";
import { HashUpgradeParams } from "../HashUpgrade";
import { formatInt } from "../../ui/formatNumber";
import { Money } from "../../ui/React/Money";

export const HashUpgradesMetadata: HashUpgradeParams[] = [
  {
    cost: 4,
    costPerLevel: 4,
    desc: (
      <>
        Sell hashes for <Money money={1e6} />
      </>
    ),
    name: "Sell for Money",
    effectText: (level: number): JSX.Element | null => (
      <>
        Sold for <Money money={1e6 * level} />
      </>
    ),
    value: 1e6,
  },
  {
    costPerLevel: 100,
    desc: (
      <>
        Sell hashes for <Money money={1e9} /> in Corporation funds
      </>
    ),
    name: "Sell for Corporation Funds",
    effectText: (level: number): JSX.Element | null => (
      <>
        Sold for <Money money={1e9 * level} /> Corporation funds.
      </>
    ),
    value: 1e9,
  },
  {
    costPerLevel: 50,
    desc:
      "Use hashes to decrease the minimum security of a single server by 2%. " +
      "Note that a server's minimum security cannot go below 1. This effect persists " +
      "until you install augmentations (since servers are reset at that time).",
    hasTargetServer: true,
    name: "Reduce Minimum Security",
    value: 0.98,
  },
  {
    costPerLevel: 50,
    desc: (
      <>
        Use hashes to increase the maximum amount of money on a single server by 2%. This effect persists until you
        install augmentations (since servers are reset at that time). Note that a server's maximum money is soft capped
        above <Money money={10e12} />
      </>
    ),
    hasTargetServer: true,
    name: "Increase Maximum Money",
    value: 1.02,
  },
  {
    costPerLevel: 50,
    desc:
      "Use hashes to improve the experience earned when studying at a university by 20%. " +
      "This effect persists until you install augmentations.",
    name: "Improve Studying",
    effectText: (level: number): JSX.Element | null => <>Improves studying by {level * 20}%</>,
    value: 20, // Improves studying by value%
  },
  {
    costPerLevel: 50,
    desc:
      "Use hashes to improve the experience earned when training at the gym by 20%. This effect " +
      "persists until you install augmentations.",
    name: "Improve Gym Training",
    effectText: (level: number): JSX.Element | null => <>Improves training by {level * 20}%</>,
    value: 20, // Improves training by value%
  },
  {
    costPerLevel: 200,
    desc: "Exchange hashes for 1k Scientific Research in all of your corporation's divisions",
    name: "Exchange for Corporation Research",
    effectText: (level: number): JSX.Element | null => (
      <>Acquired a total of {formatInt(level * 1000)} Scientific Research in your divisions.</>
    ),
    value: 1000,
  },
  {
    costPerLevel: 250,
    desc: "Exchange hashes for 100 Bladeburner Rank",
    name: "Exchange for Bladeburner Rank",
    effectText: (level: number): JSX.Element | null => (
      <>Acquired a total of {formatInt(100 * level)} Bladeburner rank</>
    ),
    value: 100,
  },
  {
    costPerLevel: 250,
    desc: "Exchanges hashes for 10 Bladeburner Skill Points",
    name: "Exchange for Bladeburner SP",
    effectText: (level: number): JSX.Element | null => (
      <>Acquired a total of {formatInt(10 * level)} Bladeburner Skill Points</>
    ),
    value: 10,
  },
  {
    costPerLevel: 200,
    desc: "Generate a random Coding Contract somewhere on the network",
    name: "Generate Coding Contract",
    effectText: (level: number): JSX.Element | null => <>Generated {level} contracts.</>,
    value: 1,
  },
  {
    costPerLevel: 200,
    desc: "Use hashes to increase the favor with a company by 5. This effect persists until you enter a new BitNode.",
    hasTargetCompany: true,
    name: "Company Favor",
    value: 5,
  },
];

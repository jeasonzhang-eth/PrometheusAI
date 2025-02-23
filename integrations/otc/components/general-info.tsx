"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useAccount, useSwitchChain, useSendTransaction } from "wagmi"
import { formatEther, parseEther } from "ethers/lib/utils"

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/config/design"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { useAave } from "../hooks/use-aave"
import { marketsData } from "../utils/market-config"
import { HealthFactor } from "./health-factor"

export const GeneralInfo = () => {
  const { chain } = useAccount()
  const { switchChain } = useSwitchChain()
  const [address, setAddress] = useState("")
  const [amount, setAmount] = useState("")

  const { balanceInUsd, totalDebtInUsd, healthFactor, averageNetApy } =
    useAave()

  const { sendTransaction } = useSendTransaction()

  const handleSendTransaction = () => {
    if (!address || !amount) {
      alert("Please enter both address and amount")
      return
    }

    sendTransaction?.({
      // @ts-ignore
      to: "0x" + address,
      // @ts-ignore
      value: amount ? parseEther(amount) : undefined,
    })
  }

  return (
    <motion.div
      animate="show"
      className="flex items-center justify-center py-4"
      initial="hidden"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      <div className="w-full rounded border p-5">
        <h3 className="text-lg">Select Chain</h3>
        <div className="mb-4 flex items-center">
          <div className="flex w-60 flex-col">
            <Select
              value={chain?.id.toString()}
              onValueChange={(e) => switchChain?.({ chainId: Number(e) })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select market" />
              </SelectTrigger>
              <SelectContent>
                {marketsData.map((market, index) => (
                  <SelectItem key={index} value={market.chainId.toString()}>
                    <div className="flex items-center justify-between">
                      <Image
                        src={`/integrations/aave/logos/${market.marketTitle
                          .split(" ")[0]
                          .toLowerCase()}.png`}
                        alt={market.marketTitle}
                        height={20}
                        width={20}
                        className="mr-2 rounded-full"
                      />
                      {market.marketTitle}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="mt-4">
              <Label htmlFor="address">Ethereum Mainnet Address</Label>
              <Input
                id="address"
                type="text"
                placeholder="Enter Ethereum mainnet address"
                className="mt-1"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="amount">Amount of ETH</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter ETH amount"
                className="mt-1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <Button 
              className="w-full mt-6"
              onClick={handleSendTransaction}
              disabled={!sendTransaction || !address || !amount}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

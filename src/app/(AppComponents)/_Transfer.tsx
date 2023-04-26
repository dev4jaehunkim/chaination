"use client";
import React, { useState, useEffect } from 'react';


type TransferProps = {
  beneficiary: string[];
  contract: DonateContract;
  accounts: string[];
  donationId: number;
  current: number;
  handlesDonate: Function;
};

type DonateContract = {
  methods: {
    donate: (account:string) => any;
    unstake: (account:string) => any;
  }
}

const Transfer: React.FC<TransferProps> = ({ beneficiary, contract, web3, accounts, donationId, current, handlesDonate}) => {
  const [amount, setAmount] = useState<number>(0);
  const [staking, setStaking] = useState<string | undefined>();

  
  async function handleDonate(): Promise<void> {
    if(!web3){
      console.log("메타마스크 로그인이 필요합니다.")
      return;
      }

    const accounts = await web3.eth.getAccounts();
    const amountInWei = web3.utils.toWei(amount.toString());
    const balance = await web3.eth.getBalance(accounts[0])
        
    await contract.methods.donate(beneficiary[donationId], donationId).send({ from: accounts[0], value:amountInWei}); 
    
    handlesDonate(amount)

    alert(`${amount}ETH만큼 기부했습니다!`)
    setStaking(amountInWei);
  }

  async function transferDonate(): Promise<void>{
    const accounts = await web3.eth.getAccounts();  
    const from = accounts[0]
    const beneficiaries = [beneficiary[donationId]];
    await contract.methods.unstake(beneficiaries, donationId).send({ from });
    console.log(`Unstaking of ${staking} ETH successful from ${from}`);
  }

  return (
    <div>
      <label className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        Amount:
        <input className="mt-4 px-4 py-1.5 bg-indigo-500 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-470"
        type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      </label>
      <br />
      <br />
      <div className="text-gray-500 text-sm">
      <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
      onClick={handleDonate}>Donate</button>
      <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      onClick={transferDonate}>Transfer</button>
      </div>
    </div>
  );
}

export default Transfer;
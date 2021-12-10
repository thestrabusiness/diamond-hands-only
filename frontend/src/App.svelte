<script lang="ts">
	import { ethers } from "ethers";

	const { ethereum } = window;

	let provider = new ethers.providers.Web3Provider(ethereum);
	let connectedWallet: string | null;
	let balance: ethers.BigNumber | null;

	const handleConnectWallet = (): void => {
		provider.send("eth_requestAccounts", []).then(async ([address])=>{
			connectedWallet = address
			balance = await provider.getBalance(address)
		}).catch((error)=>{
			console.log(error.message)
		})
	}

	if(ethereum.isMetaMask && ethereum.selectedAddress) {
		connectedWallet = ethereum.selectedAddress
		provider.getBalance(connectedWallet).then((result)=>{
			balance = result
		})
	}

	ethereum.on('accountsChanged', (accounts: string[]) => {
		connectedWallet = accounts[0];
	})


</script>

<main>
	{#if !window.ethereum}
		No wallet detected. Please install metamask
	{/if}

	{#if !connectedWallet}
		<h1>Wallet not connected</h1>
		<button on:click={handleConnectWallet}>Connect to Metamask</button>
	{/if}

	{#if connectedWallet}
		<h1>{connectedWallet}</h1>
		<h1>{balance && ethers.utils.formatEther(balance)}</h1>
	{/if}

</main>

<style></style>

if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
        // Request for account access
        ethereum.enable().then(function () {
            console.log("MetaMask is connected!");
            const accounts = web3.eth.getAccounts();
            console.log("User address:", accounts[0]);
        });
    } catch (error) {
        console.error("User denied account access:", error);
    }
} else {
    console.error("MetaMask not found. Please install MetaMask.");
}



/**
 * Fetch list of transactions from the Stellar network.
 */
 var server = new StellarSdk.Server("https://horizon.stellar.org");  

 document.getElementById("fetchBtn").addEventListener("click", handleFetchTransactions = () => {
    console.log("Fetching transactions...");
    let trxList = document.getElementById("transactions");
    server
        .transactions()
        .call()
        .then(function (resp) {
            let transactions = resp.records;
            console.log(transactions);
           transactions.map(transaction => {
            trxList.innerHTML += `<tr><td>${transaction.id}</td><td>${transaction.created_at}</td></td>`;
           })

        })
        .catch(function (err) {
            console.error(err);
        });
    
});

 
 


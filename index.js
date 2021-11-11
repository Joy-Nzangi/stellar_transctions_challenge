


/**
 * Fetch list of transactions from the Stellar network.
 */
 var server = new StellarSdk.Server("https://horizon.stellar.org");
​
 var handleFetchTransactions = () => {
     console.log("Fetching transactions...");
     let trxList = document.getElementById("transactions");
     server
         .transactions()
         .call()
         .then(function (resp) {
             let transactions = resp.records;
             console.log(transactions);
            transactions.map(transaction => {
                trxList.innerHTML += `<tr><td>${transaction.id}</tr></td>`;
            })
 
         })
         .catch(function (err) {
             console.error(err);
         });
     
 }
 


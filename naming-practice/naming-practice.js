function calculateTotalPurchaseAmount(purchaseAmounts) {
    let totalAmount = 0;
    purchaseAmounts.forEach(amount => {
      totalAmount += amount;
    });
    return totalAmount;
  }
  
  let topPurchasersAmounts = [10000, 20000, 30000];
  console.log(calculateTotalPurchaseAmount(topPurchasersAmounts));
  

// function to format currency
const formatAmount = (amount: number | bigint) => {
    let formatter;
     if (typeof amount === "number") {
          formatter = new Intl.NumberFormat('en-NG', {
             style: 'currency',
             currency: 'NGN',
         }).format(amount);
     }
    return formatter;
};
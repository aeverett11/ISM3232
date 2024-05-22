const bill_1 = 40;
const bill_2 = 275;
const bill_3 = 430;
const tip_percentage = (bill) => (bill >= 50 && bill <= 300 ? 0.15 : 0.2);
const printTipResult = (bill) => {
  console.log(`The third table's bill came out to $${bill}. 
  After the tip of ${tip_percentage(bill)}% 
  (equalling: $${bill * tip_percentage(bill)}) was added, 
  the final amount owed is: $${bill * tip_percentage(bill) + bill}`);
};

printTipResult(bill_1);
printTipResult(bill_2);
printTipResult(bill_3);
export interface Currency{
Id: number;
Pair: string;
Buy_Price: number;
Sell_Price: number;
Description: string;

}

export const currency = [
  {
  Id: 1,
  Pair: "USD/CAD",
  Buy_Price: 3.29,
  Sell_Price: 3.35,
  Description: " US Dollars to Canadian Dollar"
  },
  {
  Id: 2,
  Pair: "USD/AUD",
  Buy_Price: 3.56,
  Sell_Price: 3.65,
  Description: "US Dollars to Australian Dollar"

  },

  {
    Id: 3,
    Pair: "USD/JPY",
    Buy_Price: 5.85,
    Sell_Price: 6.22,
    Description: "US Dollars to Japanese Yen"
  
    },
    {
      Id: 4,
      Pair: "USD/INR",
      Buy_Price: 6.77,
      Sell_Price: 5.33,
      Description: "US Dollars to Indian Rupees"
    }
    

  ];






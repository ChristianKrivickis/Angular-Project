export interface ICoin {
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap_rank: number  
}

export class Coin{
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap_rank: number;
    
    constructor(symbol: string, name: string, image: string, current_price: number, market_cap_rank: number){
        this.symbol = symbol;
        this.name = name;
        this.image = image;
        this.current_price = current_price;
        this.market_cap_rank = market_cap_rank;
    }
}
export interface ICoin {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: string,
    market_cap_rank: string  
}

export class coin{
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: string;
    market_cap_rank: string;
    
    constructor(id: string, symbol: string, name: string, image: string, current_price: string, market_cap_rank: string){
        this.id = id;
        this.symbol = symbol;
        this.name = name;
        this.image = image;
        this.current_price = current_price;
        this.market_cap_rank = market_cap_rank;
    }
}
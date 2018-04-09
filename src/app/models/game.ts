
export class Game {
    Players :User[] = [
        { Name: 'Raj', MyQuotes: []},
        { Name: 'Diku', MyQuotes: []},
        { Name: 'Rocketeer', MyQuotes: []}
    ];
    Dealer: string = "Raj";
    Picture: string = 'https://images6.alphacoders.com/863/thumb-1920-863542.png';
    PlayedQuotes:Quote[] = [
        { Text: "Lagging", PlayerName: 'Diku', Chosen: false }
    ];
}

export class User {
    Name: string;
    MyQuotes: string[];
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}
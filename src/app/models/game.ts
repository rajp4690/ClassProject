
export class Game {
    MyQuotes: string[] = [
        "Great minds think alike, but ...",
        "Axis of Evil",
        "You wot mate xD",
        "What a save!",
        "I know da way!"
    ];
    Players :User[] = [
        { Name: 'Raj' },
        { Name: 'Diku' },
        { Name: 'Rocketeer' }
    ];
    Dealer: string = "Raj";
    Picture: string = 'https://images6.alphacoders.com/863/thumb-1920-863542.png';
    PlayedQuotes:Quote[] = [
        { Text: "Lagging", PlayerName: 'Diku', Chosen: false }
    ];
}

export class User {
    Name: string;
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}

export class Game {
    MyQuotes:string[] = [
        "Great minds think alike, but ...",
        "Axis of Evil",
        "What a save!"
    ];
    Players:User[] = [];
    Picture:string = 'https://images6.alphacoders.com/863/thumb-1920-863542.png';
    PlayedQuotes:Quote[] = [
        new Quote('I know da way!', 'Raj', true),
        new Quote('You wot mate xD', 'Diku', true)
    ];
}

export class User {
    Name:string;
}

export class Quote {
    Text:string;
    PlayerName:string;
    Chosen:boolean = false;
    constructor(text:string, playerName:string, chosen:boolean) {
        this.Text = text;
        this.PlayerName = playerName;
        this.Chosen = chosen;
    }
}

export class Game {
    MyQuotes:string[] = [
        "Great minds think alike, but ...",
        "Axis of Evil",
        "What a save!"
    ];
    Players:User[] = [];
    Picture:string = 'https://images6.alphacoders.com/863/thumb-1920-863542.png';
    PlayedQuotes:Quote[] = [];
}

export class User {
    Name:string;
}

export class Quote {
    Text:string;
    PlayerName:string;
    Chosen:boolean = false;
}
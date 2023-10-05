interface Scope {
    market: string[],
    public: string[]
}

interface Game {
    _id?: string,
    name: string,
    area: string[],
    purpose: string[],
    scope: Scope,
    hasGoal: boolean,
    description: string,
    link: string,
    contentValidation: string,
    observationsAndSuggestions: string,
    score: number,
    imageLink: string,
    others: string
}

export default Game

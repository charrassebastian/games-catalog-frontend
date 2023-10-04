interface Purpose {
    "messagePropagation": string[],
    "training": string[],
    "informationExchange": boolean
}

interface Scope {
    "market": string[],
    "public": string[]
}

interface Game {
    "name": string,
    "area": string[],
    "purpose": Purpose,
    "scope": Scope,
    "hasGoal": boolean,
    "description": string,
    "link": string,
    "contentValidation": string,
    "observationsAndSuggestions": string,
    "score": number,
    "imageLink": string,
    "others": string
}

export default Game

export type EntityProperties = {
    [x: string]: number;
}

export type Entity = {
    uid: string;
    name: string;
    description?: string;
    questLabel?: string;
}

export type Equipment = Entity & {
    equipment: {
        properties: EntityProperties;
    }
}

export type Consumable = Entity & {
    consumable: {
        properties: EntityProperties;
    }
}

export type Skill = Entity & {
    skill: {
        properties: EntityProperties;
    }
}

export type InventoryItem = Equipment | Consumable;

export type Character = Entity & {
    properties: EntityProperties;
    dynamicProperties: EntityProperties;
    equipment: Equipment[];
    skills: Skill[]
}

export type Quest = Entity & {
    parentUid: string | null;
    finished: boolean;
    questLabel: string;
}

export type CharacterGroup = {
    characters: Character[];
    inventory: InventoryItem[];
    quests: Quest[];
}
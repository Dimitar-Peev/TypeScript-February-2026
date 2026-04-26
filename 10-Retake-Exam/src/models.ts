export enum HeroRole {
    Warrior = 'WARRIOR',
    Mage = 'MAGE',
    Archer = 'ARCHER'
}

export interface WithId {
    id: number;
}

export interface Hero extends WithId {
    name: string;
    level: number;
    role: HeroRole;
}

export interface Weapon extends WithId {
    name: string;
    damage: number;
}
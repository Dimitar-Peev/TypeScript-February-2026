import {CriticalStrike} from './decorators';
import {Hero, HeroRole, Weapon, WithId} from './models';

export class GuildStash<T extends WithId> {
    private records: T[] = [];

    public add(item: T): void {
        this.records.push(item);
    }

    public take(id: number): T | undefined {
        const index = this.records.findIndex(item => item.id === id);
        if (index === -1) return undefined;
        return this.records.splice(index, 1)[0];
    }

    public getAll(): T[] {
        return [...this.records];
    }
}

export abstract class BaseHero implements Hero {
    public weapons: Weapon[] = [];
    public id: number;
    public name: string;
    public level: number;
    public role: HeroRole;

    constructor(id: number, name: string, level: number, role: HeroRole) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.role = role;
    }

    abstract calculateStamina(): number;

    abstract attack(): number;

    abstract getHeroDetail(): string;
}

export class Warrior extends BaseHero {
    constructor(id: number, name: string, level: number, public strength: number) {
        super(id, name, level, HeroRole.Warrior);
    }

    calculateStamina(): number {
        return (this.level * 10) + (this.strength * 5);
    }

    @CriticalStrike
    attack(): number {
        return this.strength * 2;
    }

    getHeroDetail(): string {
        return `Strength: ${this.strength}`;
    }
}

export class Mage extends BaseHero {
    constructor(id: number, name: string, level: number, public mana: number) {
        super(id, name, level, HeroRole.Mage);
    }

    calculateStamina(): number {
        return (this.level * 5) + (this.mana * 2);
    }

    attack(): number {
        return this.mana * 2;
    }

    getHeroDetail(): string {
        return `Mana: ${this.mana}`;
    }
}

export class Archer extends BaseHero {
    constructor(id: number, name: string, level: number, public agility: number) {
        super(id, name, level, HeroRole.Archer);
    }

    calculateStamina(): number {
        return (this.level * 8) + (this.agility * 4);
    }

    attack(): number {
        return this.agility * 2;
    }

    getHeroDetail(): string {
        return `Agility: ${this.agility}`;
    }
}
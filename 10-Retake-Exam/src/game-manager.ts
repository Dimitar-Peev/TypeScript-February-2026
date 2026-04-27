import {BaseHero, GuildStash} from './hero-types';
import {Weapon} from './models';

export class GameManager {
    private heroes: BaseHero[] = [];
    private stash: GuildStash<Weapon> = new GuildStash<Weapon>();

    public addHero(hero: BaseHero): string {
        this.heroes.push(hero);
        return `Hero "${hero.name}" (ID: ${hero.id}) joined the guild.`;
    }

    public addWeaponToStash(weapon: Weapon): string {
        this.stash.add(weapon);
        return `Weapon "${weapon.name}" (ID: ${weapon.id}) added to the guild stash.`;
    }

    public equipWeapon(heroId: number, weaponId: number): string {
        const hero = this.heroes.find(h => h.id === heroId);
        if (!hero) {
            return `ERROR: Hero with ID ${heroId} not found.`;
        }

        const weapon = this.stash.take(weaponId);
        if (!weapon) {
            return `ERROR: Weapon with ID ${weaponId} not found in the stash.`;
        }

        hero.weapons.push(weapon);

        return `Weapon "${weapon.name}" equipped to hero "${hero.name}".`;
    }

    public listAllHeroes(): string[] {
        const result: string[] = [];
        result.push('--- Guild Roster ---');

        for (const hero of this.heroes) {
            const role = hero.role;
            const name = hero.name;
            const level = hero.level;
            const specificDetail = hero.getHeroDetail();
            const stamina = hero.calculateStamina();

            result.push(`[${role}] ${name} (Level: ${level}, ${specificDetail}) - Stamina: ${stamina}`);
        }

        result.push('--------------------');

        return result;
    }

}
import {GameManager} from './game-manager';
import {Archer, GuildStash, Mage, Warrior} from './hero-types';
import {HeroRole, Weapon} from './models';
import {CriticalStrike} from './decorators';

async function main() {
    //Example 1: Heroes
    const manager = new GameManager();
    const warrior = new Warrior(1, 'Arthur', 10, 50); // id, name, level, strength
    const mage = new Mage(2, 'Gandalf', 20, 100); // id, name, level, mana

    console.log('\tOutput 1:');
    console.log(manager.addHero(warrior));
    console.log(manager.addHero(mage));

    // Output 1: 
    // Hero "Arthur" (ID: 1) joined the guild.
    // Hero "Gandalf" (ID: 2) joined the guild.

    //Example 2: Stash and Equipment
    const manager2 = new GameManager();
    const warrior2 = new Warrior(1, 'Arthur', 10, 50);
    const mage2 = new Mage(2, 'Gandalf', 20, 100);

    console.log('\tOutput 2:');
    console.log(manager2.addHero(warrior2));
    console.log(manager2.addHero(mage2));

    const sword: Weapon = {id: 101, name: 'Excalibur', damage: 120};
    const staff: Weapon = {id: 102, name: 'Elder Staff', damage: 150};

    console.log(manager2.addWeaponToStash(sword));
    console.log(manager2.addWeaponToStash(staff));

    console.log(manager2.equipWeapon(1, 101));
    console.log(manager2.equipWeapon(99, 102)); // Invalid hero
    console.log(manager2.equipWeapon(2, 999)); // Invalid weapon

    manager.listAllHeroes().forEach(line => console.log(line));

    // Output: 2
    // Hero "Arthur" (ID: 1) joined the guild.
    // Hero "Gandalf" (ID: 2) joined the guild.
    // Weapon "Excalibur" (ID: 101) added to the guild stash.
    // Weapon "Elder Staff" (ID: 102) added to the guild stash.
    // Weapon "Excalibur" equipped to hero "Arthur".
    // ERROR: Hero with ID 99 not found.
    // ERROR: Weapon with ID 999 not found in the stash.
    // --- Guild Roster ---
    // [WARRIOR] Arthur (Level: 10, Strength: 50) - Stamina: 350
    // [MAGE] Gandalf (Level: 20, Mana: 100) - Stamina: 300
    // --------------------

    //Example 3: Decorator and Combat Test
    const manager3 = new GameManager();
    const warrior3 = new Warrior(3, 'Conan', 15, 60); // Base attack = 60 * 2 = 120
    const archer3 = new Archer(4, 'Legolas', 15, 60); // Base attack = 60 * 2 = 120
    const mage3 = new Mage(2, 'Gandalf', 20, 100); // Base attack = 100 * 2 = 200

    console.log('\tOutput 3:');
    // Archer attack: 60 * 2 = 120 (No decorator)
    console.log(`Archer Attack: ${archer3.attack()}`);

    // Mage attack: 100 * 2 = 200 (No decorator)
    console.log(`Mage Attack: ${mage3.attack()}`);

    // Warrior attack: (60 * 2) * 1.5 = 180 (Decorator applied)
    console.log(`Warrior Attack (Critical): ${warrior3.attack()}`);

    // Output 3: 
    // Archer Attack: 120
    // Mage Attack: 200
    // Warrior Attack (Critical): 180

    //Example 4: Stamina Calculation 
    const manager4 = new GameManager();
    const warrior4 = new Warrior(3, 'Conan', 15, 60);
    const archer4 = new Archer(4, 'Legolas', 15, 60);
    const mage4 = new Mage(2, 'Gandalf', 20, 100);

    console.log('\tOutput 4:');
    // Warrior stamina: (15 * 10) + (60 * 5) = 150 + 300 = 450
    console.log(`Warrior Stamina: ${warrior4.calculateStamina()}`);

    // Archer stamina: (15 * 8) + (60 * 4) = 120 + 240 = 360
    console.log(`Archer Stamina: ${archer4.calculateStamina()}`);

    // Mage stamina: (20 * 5) + (100 * 2) = 100 + 200 = 300
    console.log(`Mage Stamina: ${mage4.calculateStamina()}`);

    // Output 4: 
    // Warrior Stamina: 450
    // Archer Stamina: 360
    // Mage Stamina: 300
}

main();

export {
    GameManager,
    Warrior,
    Mage,
    Archer,
    GuildStash,
    HeroRole,
    CriticalStrike
};
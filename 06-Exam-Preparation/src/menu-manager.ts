import {BaseMenuItem} from './menu-item-types';
import {Client, MenuItemType} from './models';

export class MenuManager {
    private menuItems: BaseMenuItem[] = [];
    private clients: Map<number, Client[]> = new Map();

    private findItemById<T extends { id: number }>(items: T[], id: number): T | undefined {
        return items.find(item => item.id === id);
    }

    addMenuItem(item: BaseMenuItem): string {
        this.menuItems.push(item);
        this.clients.set(item.id, []);
        return `Menu item "${item.name}" (ID: ${item.id}) has been added.`;
    }

    registerClient(itemId: number, client: Client): string {

        const itemClientList = this.clients.get(itemId);

        if (!itemClientList) {
            return `ERROR: Menu item with ID ${itemId} not found.`;
        }

        itemClientList!.push(client);

        return `Client ${client.name} registered for menu item ID ${itemId} successfully.`;
    }

    listAllItems(): string[] {
        const result: string[] = ["--- List of All Menu Items ---"];

        for (const item of this.menuItems) {
            const type = MenuItemType[item.type].toUpperCase();
            const calories = item.getCalories().toFixed(2);
            result.push(`[${type}] ${item.name} (${item.weightGrams}g) - Calories: ${calories}`);
        }

        return result;
    }

    findMenuItem(itemId: number): BaseMenuItem | undefined {
        return this.findItemById(this.menuItems, itemId);
    }
}

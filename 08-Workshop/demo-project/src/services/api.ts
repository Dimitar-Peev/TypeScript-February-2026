import {Log} from "../decorators/log.ts";

export class APIService<T, CreateItemT> {
    private serviceUrl: string;

    constructor(serviceUrl: string) {
        this.serviceUrl = serviceUrl;
    }

    @Log
    public async getAll(): Promise<T[]> {
        const response = await fetch(`${this.serviceUrl}`);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        return data as T[];
    }

    public async getById(id: number): Promise<T> {
        const response = await fetch(`${this.serviceUrl}/${id}`);
        const data = await response.json();
        return data as T;
    }

    @Log
    public async create(itemData: CreateItemT): Promise<T> {
        const response = await fetch(this.serviceUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemData)
        });
        const data = await response.json();
        return data as T;
    }

    public async update(id: number, itemData: T): Promise<T> {
        const response = await fetch(`${this.serviceUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemData)
        });
        const data = await response.json();
        return data as T;
    }

    public async delete(id: number): Promise<void> {
        await fetch(`${this.serviceUrl}/${id}`, {
            method: 'DELETE',
        });
    }

}
import {BaseContent, constraintId, ContentType} from './models';

export abstract class DetailedContent implements BaseContent {
    private readonly _id: number;
    private readonly _title: string;
    private readonly _releaseDate: Date;
    private _type: ContentType;

    constructor(id: number, title: string, releaseDate: Date, type: ContentType) {
        this._id = id;
        this._title = title;
        this._releaseDate = releaseDate;
        this._type = type;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get releaseDate(): Date {
        return this._releaseDate;
    }

    get type(): ContentType {
        return this._type;
    }

    set type(_value: ContentType) {
        throw new Error('Content type is immutable');
    }

    abstract getDetails(): string;
}

export class Movie extends DetailedContent {
    public readonly director: string;

    constructor(id: number, title: string, releaseDate: Date, director: string) {
        super(id, title, releaseDate, ContentType.Movie);
        this.director = director;
    }

    getDetails(): string {
        return `[MOVIE] "${this.title}" directed by ${this.director} (Released: ${this.releaseDate.toLocaleDateString("en-GB")})`;
    }
}

export class Series extends DetailedContent {
    public readonly streamingPlatform: string;

    constructor(id: number, title: string, releaseDate: Date, streamingPlatform: string) {
        super(id, title, releaseDate, ContentType.Series);
        this.streamingPlatform = streamingPlatform;
    }

    getDetails(): string {
        return `[SERIES] "${this.title}" (Released: ${this.releaseDate.toLocaleDateString("en-GB")}), available at: http://${this.streamingPlatform}`;
    }
}

export function findItemById<T extends constraintId>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
}
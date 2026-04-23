import {DetailedContent} from './content-types';
import {NotifyOnSuccess} from './decorators';
import {Viewer} from './models';

export class ContentManager {
    private contentItems: DetailedContent[] = [];
    private viewers: Map<number, Viewer[]> = new Map();

    addContent(item: DetailedContent): string {
        this.contentItems.push(item);
        this.viewers.set(item.id, []);
        return `Content "${item.title}" (ID: ${item.id}) has been added.`;
    }

    @NotifyOnSuccess('Email')
    markAsWatched(contentId: number, viewer: Viewer): string {

        const content = this.findContent(contentId);

        if (!content) {
            return `ERROR: Content with ID ${contentId} not found.`;
        }

        this.viewers.get(content.id)?.push(viewer);

        return `Viewer "${viewer.name}" marked content ID: ${content.id} as watched.`;
    }

    listAllContent(): string[] {
        return this.contentItems.map(item => item.getDetails());
    }

    findContent(contentId: number) {
        return this.contentItems.find(item => item.id === contentId);
    }
}
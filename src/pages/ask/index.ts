import { inject } from 'aurelia-framework';
import { HackerNewsApi } from '../../services/api';
import { StoryList } from '../story-list';

@inject(HackerNewsApi)
export class AskStories extends StoryList {
    constructor(api: HackerNewsApi) {
        super(api);
    }

    fetchIds(): Promise<number[]> {
        return this.api.fetch('askstories');
    }
}

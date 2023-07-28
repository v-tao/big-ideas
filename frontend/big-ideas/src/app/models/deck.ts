import { Idea } from './idea'
export interface Deck {
    id: number;
    title: string;
    description: string;
    ideas: Idea[];
}
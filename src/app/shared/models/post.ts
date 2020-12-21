import { User } from "./user";

export class Post{
    id: number;
    title: string;
    description: string;
    animal_species: string;
    date_created: Date;
    date_updated: Date;
    photo: string;
    user_created: User;
}
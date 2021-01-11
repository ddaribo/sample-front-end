import { User } from "./user";

export class Post {
    // id: number;
    title: string;
    description: string;
    location: string;
    animal_species: string;
    date_created: Date;
    date_updated: Date;
    photo: string;
    user_created: User;

    constructor(
        title: string,
        description: string,
        location: string,
        animal_species: string,
        date_created: Date,
        date_updated: Date,
        photo: string,
        user_created: User,
    ) {

        this.title = title;
        this.description = description;
        this.location = location;
        this.animal_species = animal_species;
        this.date_created = date_created;
        this.date_updated = date_updated;
        this.photo = photo;
        this.user_created = user_created;
    }
}
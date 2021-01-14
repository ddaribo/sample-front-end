

export class Post {
    id: number;
    title: string;
    description: string;
    location: string;
    animal_species: string;
    date_created: Date;
    date_updated: Date;
    photo: string;
    author: any;

    constructor(
        id: number,
        title: string,
        description: string,
        location: string,
        animal_species: string,
        date_created: Date,
        date_updated: Date,
        photo: string,
        author: any,
    ) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.location = location;
        this.animal_species = animal_species;
        this.date_created = date_created;
        this.date_updated = date_updated;
        this.photo = photo;
        this.author = author;
    }
}
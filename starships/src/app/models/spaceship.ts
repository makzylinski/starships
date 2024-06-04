export interface Spaceship {
    message: string,
    result: {
        properties: {
            model: string,
            starship_class: string,
            manufacturer: string,
            cost_in_credits: string,
            length: string,
            crew: string,
            passengers: string,
            max_atmosphering_speed: string,
            hyperdrive_rating: string,
            MGLT: string,
            cargo_capacity: string,
            consumables: string,
            pilots: [],
            created: string, // Date
            edited: string, // Date
            name: string,
            url: string    
        },
        description: string,
        _id: string,
        __v: number,
        uid: string
    },
 
}
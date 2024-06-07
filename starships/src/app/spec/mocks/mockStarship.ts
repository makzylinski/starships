import { Starship } from "src/app/models/starship";

export const mockStarship: Starship = {
  model: 'X-wing',
  starship_class: 'Starfighter',
  manufacturer: 'Incom Corporation',
  cost_in_credits: '149999',
  length: '12.5',
  crew: '1',
  passengers: '0',
  max_atmosphering_speed: '1050',
  hyperdrive_rating: '1.0',
  MGLT: '100',
  cargo_capacity: '110',
  consumables: '1 week',
  pilots: ['http://swapi.dev/api/people/1/'],
  created: new Date(),
  edited: new Date(),
  name: 'X-wing',
  url: 'http://swapi.dev/api/starships/12/'
};
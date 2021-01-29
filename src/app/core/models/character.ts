export class Character {

  id: number;
  name: string;
  status: string; // 'Alive', 'Dead', 'unknown'
  species: string;
  type: string;
  gender: string; // 'Female', 'Male', 'Genderless', 'unknown'
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;

  constructor(
    id: number,
    name: string,
    status: string, // 'Alive', 'Dead', 'unknown'
    species: string,
    type: string,
    gender: string, // 'Female', 'Male', 'Genderless', 'unknown'
    origin: object,
    location: object,
    image: string,
    episode: string[],
    url: string,
    created: string,
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.type = type;
    this.gender = gender;
    this.origin = origin;
    this.location = location;
    this.image = image;
    this.episode = episode;
    this.url = url;
    this.created = created;
  }
}

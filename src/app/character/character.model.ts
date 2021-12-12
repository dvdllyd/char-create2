export class Character {

  constructor (
    public race: string,
    public color: string,
    public charClass: string,
    public equipment: {
      armor: string, gold: string, misc: string, weapons: string[]
    },
    public special: {
      animalCompanion: string, cybernetics: string, mutations: string, robot: string, spellbook: string[],
    }

  ){

  }
}

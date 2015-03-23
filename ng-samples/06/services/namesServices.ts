
module Lesson06 {
    
    // value service
    export var maxElements = 10;
    export var superHeroes = [
        { name: "Batman" },
        { name: "Superman" },
        { name: "Elektra" },
        { name: "Catwoman" },
        { name: "Ghost rider" }
    ];

    // factory service
    export function RandomHeroFactory (superHeroes): any{        
        return superHeroes[Math.floor(Math.random() * 5)];
    }

    // Service
    export class SuperHeroesService {
        static $inject = [
            "superHeroes",
            "randomHero"
        ];

        // dependencies are inyected automatically
        constructor(private superHeroes: any[], private randomHero: {name:string}) {            
        }

        // get all remote heroes (synchronous)
        getHeroes(): string[] {
            return this.superHeroes;
        }

        addHero(name: string) {
            this.superHeroes.push({ name: name });
        }

        getRandomHero() {
            return this.randomHero.name;
        }
    }




}
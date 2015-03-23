
module Lesson06 {
    export interface Hero{
        name: string;
    }
    
    // value service
    export var maxElements = 10;
    export var superHeroes : Hero[] = [
        { name: "Batman" },
        { name: "Superman" },
        { name: "Elektra" },
        { name: "Catwoman" },
        { name: "Ghost rider" }
    ];

    // factory service
    export function randomHeroFactory (superHeroes: Hero[]): () => Hero {
        return () => superHeroes[Math.floor(Math.random() * 5)];
    }

    // Service
    export class SuperHeroesService {
        static $inject = [
            "superHeroes",
            "randomHero"
        ];

        // dependencies are inyected automatically
        constructor(private superHeroes: Hero[]) {
        }

        // get all remote heroes (synchronous)
        getHeroes(): Hero[] {
            return this.superHeroes;
        }

        addHero(name: string) {
            this.superHeroes.push({ name: name });
        }

        getRandomHero() {
            return this.superHeroes[Math.floor(Math.random() * 5)];
        }
    }

    // CUSTOM PROVIDER
    export class MyServiceProvider {

        // dependencias inline
        $get = ["superHeroes", (superHeroes: Hero[]) => {
            return new SuperHeroesService(superHeroes);
        }];
    }


}
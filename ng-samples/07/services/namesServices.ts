
module Lesson07 {
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
            "$timeout",
            "$q"
        ];

        // dependencies are inyected automatically
        constructor(private superHeroes: Hero[],
                    private $timeout: ng.ITimeoutService,
                    private $q: ng.IQService) {
        }

        // get all remote heroes (asynchronous)
        getHeroes(): ng.IPromise<Hero[]> {
            var def = this.$q.defer();

            this.$timeout(() => {
                def.resolve(this.superHeroes);
            }, 2000);

            return def.promise;
        }

        addHero(name: string) {
            this.superHeroes.push({ name: name });
        }

        getRandomHero() {
            return this.superHeroes[Math.floor(Math.random() * 5)];
        }
    }

}
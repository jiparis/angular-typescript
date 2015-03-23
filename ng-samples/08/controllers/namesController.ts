
module Lesson08 {

    export class HeroesController {
        static $inject = [
            "heroesService",
            "$log"
        ];

        public people: Hero[];

        constructor(private heroesService: SuperHeroesService,
                    private $log: ng.ILogService) {

            heroesService.getHeroes()
                .then((heroes: Hero[]) => {
                    this.people = heroes;
                })
                .catch(() => {
                    console.log("Error!!");
                });

        }

        addName (newName: string) {
            this.heroesService.addHero(newName);

        }

    }
}
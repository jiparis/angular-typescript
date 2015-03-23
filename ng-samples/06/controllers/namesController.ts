
module Lesson06 {
    export interface IAppScope extends ng.IScope {
        people: any[];

        // methods
        addName: (name: string) => void;
        addRandom: () => void;
    }

    export class NamesController {
        static $inject = [
            "$scope",
            "heroesService",
            "maxElements"
        ];

        constructor(private $scope: IAppScope, private heroesService: SuperHeroesService, private max: number) {     
            $scope.people = heroesService.getHeroes();
            
            // use arrow syntax for event handlers !!!
            $scope.addName = (newName: string) => {
                if($scope.people.length < max)
                    heroesService.addHero(newName);
            } 

            $scope.addRandom = () => {
                heroesService.addHero(heroesService.getRandomHero());
            }
        }


    }
}
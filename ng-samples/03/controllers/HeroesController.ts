module Controllers {

    export class HeroesController {
        static $inject = [
            "$scope"
        ];

        heroes = ['Superman', 'The Green Steak', 'Scorpion Shadow', 'Doctor Cranium'];
        showImg = false;

        constructor(private $scope) {     
            // setup scope       
            $scope.heroes = this.heroes;
            
            // use arrow syntax for event handlers !!!
            $scope.addName = (name: string) => {
                this.heroes.push(name);
                $scope.showImg = name == "Batman";
            }          
        }

    }
}
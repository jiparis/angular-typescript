
module Lesson04 {
    export interface IAppScope extends ng.IScope {
        people: any[];
        showImg: boolean;
        getFiltered: () => any[];
        filtro: string;

        // methods
        addName: (name: string) => void;
    }

    export class NamesController {
        static $inject = [
            "$scope",
            "filterFilter"
        ];

        showImg = false;
        heroes = [];

        constructor(private $scope: IAppScope,
            filterFilter) {
            $scope.people = this.heroes;
            // use arrow syntax for event handlers !!!
            $scope.addName = (newName:string) => {
                this.heroes.push({name: newName});
                $scope.showImg = name == "Batman";
            };

            $scope.getFiltered = () => filterFilter(this.heroes, $scope.filtro);
        }
    }
}
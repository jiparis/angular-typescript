
module Lesson05 {
    export interface IAppScope extends ng.IScope {
        people: any[];
        showImg: boolean;

        // methods
        addName: (name: string) => void;
    }

    export class NamesController {
        static $inject = [
            "$scope"
        ];

        showImg = false;
        people = [];

        constructor(private $scope: IAppScope) {     
            $scope.people = this.people;
            // use arrow syntax for event handlers !!!
            $scope.addName = (newName: string) => {
                this.people.push({ name: newName });
                $scope.showImg = angular.equals(name, "Batman");
            } 
        }

    }
}
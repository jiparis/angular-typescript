/// <reference path="../../../typings/angularjs/angular.d.ts" />

module Todos{

    class MiController{
        static $inject = [
            "$q",
            "$timeout"
        ];

        constructor(private $q:ng.IQService, private $timeout: ng.ITimeoutService){
        }

        validate(modelValue, viewValue): ng.IPromise<boolean>{

            var def = this.$q.defer();

            this.$timeout(() => {

                if (!viewValue)
                    def.resolve(true);

                if (viewValue && viewValue.indexOf("angular") > 0)
                    def.reject(false);
            }, 2000);

            return def.promise;

        }
    }
    export function MiValidador(): ng.IDirective{

        return {
            restrict: "A",
            require: ["ngModel", "miValidador"],
            controller: MiController,
            link: (scope: ng.IScope,
                   element: ng.IAugmentedJQuery,
                   attrs: ng.IAttributes,
                   contr: any[]) => {

                var ngmodel = contr[0];
                var miv: MiController = contr[1];

                ngmodel.$asyncValidators['miValidador'] =
                    (modelValue: string, viewValue: string):ng.IPromise<boolean> => {

                    return miv.validate(modelValue, viewValue);

                };

            }


        };

    }
}
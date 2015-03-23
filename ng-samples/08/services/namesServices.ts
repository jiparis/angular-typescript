
module Lesson08 {
    export interface Hero{
        name: string;
    }

    // Service
    export class SuperHeroesService {
        static $inject = [
            "$http",
            "$q",
            "$log"
        ];

        // dependencies are inyected automatically
        constructor(private $http: ng.IHttpService,
                    private $q: ng.IQService,
                    private $log: ng.ILogService) {
        }

        // get all remote heroes (asynchronous)
        getHeroes(): ng.IPromise<Hero[]> {
            var def = this.$q.defer();

            this.$http.get("services/heroes.json")
                .success((data: Hero[] ,
                          status: number,
                          headers: ng.IHttpHeadersGetter,
                          config: ng.IRequestConfig) => {

                    def.resolve(data);

                })
                .error((data) => {
                    this.$log.error("Error: " + data);
                });

            return def.promise;
        }

        addHero(name: string) {
            // TODO: POST new Hero
        }
    }

}
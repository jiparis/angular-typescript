module Lesson05 {

    export function DashFilter() {
        return (input: string) => {
            return input.replace(" ", "-");
        };
    }
}
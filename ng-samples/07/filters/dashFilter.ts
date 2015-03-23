module Lesson06 {

    export function DashFilter() {
        return (input: string) => {
            return input.replace(" ", "-");
        };
    }
}
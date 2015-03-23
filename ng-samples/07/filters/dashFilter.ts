module Lesson07 {

    export function DashFilter() {
        return (input: string) => {
            return input.replace(" ", "-");
        };
    }
}
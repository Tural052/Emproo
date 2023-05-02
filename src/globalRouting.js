export const routing = {
    to:(paramsNavigate,paramsPath) =>paramsNavigate(paramsPath),
    back:(paramsNavigate) => paramsNavigate(-1),
    forward: (paramsNavigate) => paramsNavigate(1)
}
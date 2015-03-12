export function createConstans(constants) {
    var cons = {};
    constants.forEach((i) => {cons[i] = i;});
    return cons;
}
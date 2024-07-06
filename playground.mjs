export function ArrayFindLast() {
    const temp = [27, 28, 30, 40, 42, 35, 30];
    const high = temp.findLast((x) => x > 40);

    console.log(`temp: ${temp}`);
    console.log(`high: ${high}`);
}

export const generateObject = (arr: Array<any>) => {
    const object: any = {}
    arr.forEach((val) => {
        object[val] = true;
    })

    return object
}
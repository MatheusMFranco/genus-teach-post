declare module '*.jfif' {
    const value: string;
    export default value;
}

declare module '*.less' {
    const classes: { [key: string]: string };
    export default classes;
}

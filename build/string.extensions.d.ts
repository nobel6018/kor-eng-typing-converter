interface String {
    substituteVowels(): string;
    substituteFirstConsonants(): string;
    substituteLastConsonants(): string;
    substituteTheLeftConsonants(): string;
}
declare function substituteVowels(text: string): string;
declare function substituteFirstConsonants(text: string): string;
declare function substituteLastConsonants(text: string): string;
declare function substituteTheLeftConsonants(text: string): string;
interface Dictionary {
    [key: string]: string;
}
declare const vowelDict: Dictionary;
declare const firstConsonantDict: Dictionary;
declare const lastConsonantDict: Dictionary;
declare const compatibleConsonantDict: Dictionary;

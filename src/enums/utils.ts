export type EnsureKeyEqualsValueEnum<T extends { [K in Exclude<keyof T, number>]: K }> = true;

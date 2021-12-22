export interface IProgramScope {
    level: 'HOT' | 'INTERMEDIATE' | 'ADVANCED' | 'HARDCORE' | 'ACADEMIC';
    lang: 'RU' | 'EN';
}

export interface IProgram {
    id: string;
    title: string;
    lector: string;
    type: IProgramScope;
}


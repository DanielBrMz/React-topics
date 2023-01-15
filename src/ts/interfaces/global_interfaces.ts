import { LogInValidation } from "../types/global_types";

export interface Text {
    name: string,
    feature1: string,
    feature2: string,
}
export interface Frameworks{
    id: number;
    name: string;
    version: string;
    url: string;
}

export interface SoccerPlayers{
    id: number;
    name: string;
    position: string;
    team: string;
}

export interface Track {
    artist: string;
    song: string;
}

export interface SavedSong {
    search: Track | null;
    lyrics: string | null;
    bio: any;
}

export interface Errors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export interface formObject {
    form: LogInValidation;
    errors: Errors;
    loading: boolean;
    response: boolean | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleBlur: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
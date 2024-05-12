
export interface SessionData {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    country: string;
    phoneNumber: string;
    license?: string;
    ceaNumber?: string;
    agency?: string;
    activated: boolean;
}

export interface UserFormData {
    email: string;
    password: string;
    passwordConfirm: string;
    firstName: string;
    lastName: string;
    country: string;
    phoneNumber: string;
    ceaNumber: string | null;
    agency: string | null;
    license: string | null;
}


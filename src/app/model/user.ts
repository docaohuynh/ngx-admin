export interface User {
    id: string;
    email?: string;
    password?: string;
    photoURL?: string;
    displayName?: string;
    favoriteColor?: string;
    roles?: Roles;
    expireDate?: number;
    addVipDate?: number;
    amountCash?: number;
    error?: any;
    iOSNote?: string;
    email2?: string;
    note?: string;
    fromRef?: string;
    ref?: string;
    uid?: string;
    isTranslator?: boolean;
}

export interface Roles {
    subscriber?: boolean;
    editor?: boolean;
    admincaohuynh?: boolean;
    vipmember?: boolean;
    adminielts?: boolean;
}

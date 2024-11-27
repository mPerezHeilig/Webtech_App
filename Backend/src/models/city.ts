// bearbeitet von Marcia Perez Heilig

export class City {
    private _name: string;
    private _days: number;

    constructor(name: string, days: number = 0) {
        this._name = name;
        this._days = days;
    }

    get name() : string {
        return this._name;
    }

    get days() : number {
        return this._days;
    }

    set days(days: number) {
        this._days = days;
    }
}
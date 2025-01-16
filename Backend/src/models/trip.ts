// bearbeitet von Marcia Perez Heilig

import {City} from "./city";

export class Trip {
    private _name: string;
    private _dest_country: string;
    private _departure_date: Date;
    private _return_date: Date;
    private _cities: Array<City>;
    private _tourguide: string;

    constructor(name: string, country: string, depature_date: string, return_date: string, tourguide: string){
        this._name = name;
        this._dest_country = country;
        this._departure_date = new Date(depature_date);
        this._return_date = new Date (return_date);
        this._tourguide = tourguide;
        this._cities = [];
    }

    get name(): string {
        return this._name;
    }

    get dest_country(): string {
        return this._dest_country;
    }

    get departure_date(): Date {
        return this._departure_date;
    }

    get return_date(): Date {
        return this._return_date;
    }

    get tourguide(): string {
        return this._tourguide;
    }

    get cities(): Array<City> {
        return this._cities;
    }

    set name(new_name: string) {
        this._name = new_name;
    }

    set dest_country(new_country: string) {
        this._dest_country = new_country;
    }

    set departure_date(new_departure_date: string) {
        this._departure_date = new Date(new_departure_date);
    }

    set return_date(new_return_date: string) {
        this._return_date = new Date(new_return_date);
    }

    set tourguide(new_tourguide: string) {
        this._tourguide = new_tourguide;
    }
   
    add_city(new_city: City): void {
        this._cities.push(new_city);
    }
}
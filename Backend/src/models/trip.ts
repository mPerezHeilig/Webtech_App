// bearbeitet von Marcia Perez Heilig

import {City} from "./city";

export class Trip {
    // ID to identify a specific trip
    private static current_id: number = 0;

    private _id: number;
    private _name: string;
    private _dest_country: string;
    private _departure_date: string;
    private _return_date: string;
    private _cities: Array<City>;
    private _tourguide: string;

    constructor(name: string, country: string, depature_date: string, return_date: string, tourguide: string){
        this._name = name;
        this._dest_country = country;
        this._departure_date = depature_date;
        this._return_date = return_date;
        this._tourguide = tourguide;
        this._cities = [];
        
        Trip.current_id++;
        this._id = Trip.current_id;
    }

    get name(): string {
        return this._name;
    }

    get dest_country(): string {
        return this._dest_country;
    }

    get departure_date(): string {
        return this._departure_date;
    }

    get return_date(): string {
        return this._return_date;
    }

    get tourguide(): string {
        return this._tourguide;
    }

    get cities(): Array<City> {
        return this._cities;
    }

    get id(): number {
        return this._id;
    }

    set name(new_name: string) {
        this._name = new_name;
    }

    set dest_country(new_country: string) {
        this._dest_country = new_country;
    }

    set departure_date(new_departure_date: string) {
        this._departure_date = new_departure_date;
    }

    set return_date(new_return_date: string) {
        this._return_date = new_return_date;
    }

    set tourguide(new_tourguide: string) {
        this._tourguide = new_tourguide;
    }

    // Function to reset the ID counter
    /*
    public static resetCurrentId(): void {
        Trip.current_id = 0;
    }
    */
   
    add_city(new_city: City): void {
        this._cities.push(new_city);
    }
}
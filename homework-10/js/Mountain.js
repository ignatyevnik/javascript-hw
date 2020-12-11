export default class Mountain {
    constructor(mountainName, mountainCountry, mountainHeight) {
        this.name = mountainName;
        this.country = mountainCountry;
        this.height = mountainHeight;
    }

    set name(mountainName) {
        if (mountainName.length <= 3) throw new Error('Слишком короткое название горы');
        this._name = mountainName;
    }

    get name() {
        return this._name;
    }

    set country(mountainCountry) {
        if (mountainCountry.length <= 3) throw new Error('Слишком короткое название страны');
        this._country = mountainCountry;
    }

    get country() {
        return this._country;
    }

    set height(mountainHeight) {
        if (mountainHeight < 100) throw new Error('Слишком маленькая высота горы');
        this._height = mountainHeight;
    }

    get height() {
        return this._height;
    }
}
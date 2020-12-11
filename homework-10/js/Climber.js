export default class Climber {
    constructor(climberName, climberAddress) {
        this.name = climberName;
        this.address = climberAddress;
    }

    set name(climberName) {
        if (climberName.length <= 2) throw new Error('Слишком короткое имя');
        this._name = climberName;
    }

    get name() {
        return this._name;
    }

    set address(climberAddress) {
        if (climberAddress.length <= 4) throw new Error('Слишком короткий адрес');
        this._address = climberAddress;
    }

    get address() {
        return this._address;
    }
}
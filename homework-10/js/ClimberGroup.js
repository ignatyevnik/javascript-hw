export default class ClimberGroup {
    _climberArr = [];
    _chosenMountain = null;

    isOpened() {
        if (this._climberArr.length <= 2) {
            console.log("Набор открыт.");
            return true;
        } else {
            console.log("Набор закрыт! Обратитесь в другой раз.");
            return false;
        }
    }

    createClimberGroup(mountName, ...group) {
        for (let person of group) {
            if (this.isOpened()) {
                this._climberArr.push(person);
            }
        }
        this._chosenMountain = mountName;
        console.log(`Поход на гору ${this._chosenMountain}. В составе группы находятся ${this._climberArr}`);
    }

    get _climberArr() {
        return this._climberArr;
    }

    get _chosenMountain() {
        return this._chosenMountain;
    }
}
import { makeAutoObservable } from "mobx";

class state {
    constructor() {
        makeAutoObservable(this)
    }
    pays = [

    ]
    musk(val) {
        debugger
        return val.toString().replace(/\s+/g, '').trim()
            .split('')
            .map((num, i, arr) => {
                return (arr.length - 1 - i) % 3 === 0 && i !== arr.length - 1
                    ? num + ' '
                    : num
            })
            .join('')
    }
    calc(val) {
        debugger
        this.pays = []
        let num = val.replace(/\s+/g, '').trim()
        let total = 260000
        let yearly = (num * 12) * 0.13
        for (let i = 1; total > 0; i++) {
            debugger
            this.pays.push({
                'year': i,
                'value': total >= yearly ? this.musk(yearly) : this.musk(total),
                'active': true
            })
            total -= yearly
        }
    }
}

export default new state
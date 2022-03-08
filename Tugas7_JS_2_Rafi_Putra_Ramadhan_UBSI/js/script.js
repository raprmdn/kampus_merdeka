class Gempa {
    constructor(lokasi, skala) {
        this.lokasi = lokasi
        this.skala = skala
    }

    dampak() {
        let condition

        if ( this.skala > 0 && this.skala <= 2 ) {
            condition = 'dampaknya tidak terasa.'
        } else if ( this.skala > 2 && this.skala <= 4 ) {
            condition = 'dampaknya bangunan retak-retak.'
        } else if ( this.skala > 4 && this.skala <= 6 ) {
            condition = 'dampaknya bangunan roboh.'
        } else if ( this.skala > 6 && this.skala <= 10 ) {
            condition = 'dampaknya bangunan roboh dan berpotensi tsunami.'
        } else {
            condition = 'Invalid!'
        }

        return `Gempa Bumi dirasakan di <b>${this.lokasi}</b>, dengan kekuatan Magnitudo: <b>${this.skala}</b>, dan ${condition}`
    }
}

let objGempa1 = new Gempa('ESE of Pahala, Hawaii', 2.8)
let objGempa2 = new Gempa('NNW of Jeremia, Haiti', 4.6)
let objGempa3 = new Gempa('South of the Kermadec Islands', 4.9)
let objGempa4 = new Gempa('SSE of Itoman, Japan', 4.5)
let objGempa5 = new Gempa('NE of San Lucas, CA', 2.9)
let objGempa6 = new Gempa('WSW of Fuig, Puerto Rico', 2.5)
let objGempa7 = new Gempa('W of Olonkinbyen, Svalbard and Jan Mayen', 4.0)
let objGempa8 = new Gempa('SSE of Mugur-Aksy, Russia', 4.0)
let objGempa9 = new Gempa('WNW of Bodie, CA', 2.8)
let objGempa10 = new Gempa('Fiji region', 4.5)

let earthquakeTableData = document.getElementById('earthquake-data')

// Assign to Array Objects
const earthquakeLists = [
    objGempa1, objGempa2, objGempa3, objGempa4, objGempa5,
    objGempa6, objGempa7, objGempa8, objGempa9, objGempa10
]

earthquakeLists.map((earthquake, index) => {
    earthquakeTableData.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${earthquake.lokasi}</td>
            <td>M ${earthquake.skala}</td>
            <td>${earthquake.dampak()}</td>
        </tr>
    `
})
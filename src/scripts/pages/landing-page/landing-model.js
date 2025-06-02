import {
    predictStuntingGuest
} from '../../data/api'; 

export default class LandingModel {
    constructor() {
        this.gender = '';
        this.umur = 0;
        this.tinggi = 0;
        this.berat = 0;
    }

    setGender(value) {
        this.gender = value;
    }

    increaseUmur() {
        this.umur += 1;
    }

    decreaseUmur() {
        if (this.umur > 0) this.umur -= 1;
    }

    increaseBerat() {
        this.berat += 1;
    }

    decreaseBerat() {
        if (this.berat > 0) this.berat -= 1;
    }

    setTinggi(value) {
        this.tinggi = value;
    }

    getData() {
        return {
            gender: this.gender,
            age: this.umur,
            height: this.tinggi,
            weight: this.berat,
        };
    }

    async predictStunting() {
        const {
            gender,
            age,
            height,
            weight
        } = this.getData();
        console.log('Payload dikirim:', { gender, age, height, weight });
        return await predictStuntingGuest({
            gender,
            age,
            height,
            weight
        });
    }
}
export class DiceService {
    public roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}
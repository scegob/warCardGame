
//unit test

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
       // this.playerPoints = ""
    }
}

//expect method for chai
let expect = chai.expect;
//describe uses a name for the test and a function will facilitate it
describe('MyFunction', () => {
    describe('Player Class', () => {
        it('It should return a name', () => {
            let testName = new Player('Mario');
            expect(testName.playerName).to.equal('Mario');
        });
    });
});


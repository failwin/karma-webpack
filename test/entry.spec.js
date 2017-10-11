var mul = require('../src/entry');

describe("entry", function() {

    it("gets a special value from filea", function() {
        expect(mul(1, 2, 3)).to.be.equal(9);
    });

});

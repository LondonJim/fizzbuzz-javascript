describe("FizzBuzz", function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {

    it("not divisible by 3 or 5", function() {
      expect(fizzbuzz.play(2)).toEqual(2);
    });

    it("buzz", function() {
      expect(fizzbuzz.play(5)).toEqual('buzz');
    });

    it("fizz", function() {
      expect(fizzbuzz.play(3)).toEqual('fizz');
    });

    it("fizzbuzz", function() {
      expect(fizzbuzz.play(15)).toEqual('fizzbuzz');
    });
  });
});

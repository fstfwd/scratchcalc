// Generated by CoffeeScript 1.6.1
(function() {

  describe("A TreeBuilder", function() {
    it("exists in the calculator", function() {
      return expect(EQTreeBuilder).toBeDefined();
    });
    it("can calculate expressions", function() {
      var comparison, number, result;
      result = EQParser.parse("1+1");
      number = new NumberValue("2");
      comparison = result.compareTo(number);
      return expect(comparison).toEqual(0);
    });
    return describe("specifically ", function() {
      it("can add numbers", function() {
        var comparison, number, result;
        result = EQParser.parse("1+1");
        number = new NumberValue("2");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("1+1+2+5+10+200");
        number = new NumberValue("219");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("10 + -5 + 2");
        number = new NumberValue("7");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("-10 + -5 + -2");
        number = new NumberValue("-17");
        comparison = result.compareTo(number);
        return expect(comparison).toEqual(0);
      });
      it("can subtract numbers", function() {
        var comparison, number, result;
        result = EQParser.parse("3-1");
        number = new NumberValue("2");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("200-100-50");
        number = new NumberValue("50");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("200-(100 -50)");
        number = new NumberValue("150");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("10- -5 - 2");
        number = new NumberValue("13");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("-10- -5 - -2");
        number = new NumberValue("-3");
        comparison = result.compareTo(number);
        return expect(comparison).toEqual(0);
      });
      it("can multiply numbers", function() {
        var comparison, number, result;
        result = EQParser.parse("3*2");
        number = new NumberValue("6");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("3*2*5");
        number = new NumberValue("30");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("200* 0.5");
        number = new NumberValue("100");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("10* -5 * 2");
        number = new NumberValue("-100");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("-10 * -5 * 2");
        number = new NumberValue("100");
        comparison = result.compareTo(number);
        return expect(comparison).toEqual(0);
      });
      it("can divide numbers", function() {
        var comparison, number, result;
        result = EQParser.parse("10/2");
        number = new NumberValue("5");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("18/2/3");
        number = new NumberValue("3");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("200 / 0.5");
        number = new NumberValue("400");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("10/ -2");
        number = new NumberValue("-5");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("-10 / -5");
        number = new NumberValue("2");
        comparison = result.compareTo(number);
        return expect(comparison).toEqual(0);
      });
      return it("can handle factorials", function() {
        var comparison, number, result;
        result = EQParser.parse("3!");
        number = new NumberValue("6");
        comparison = result.compareTo(number);
        console.log("sanity", number.toString(), result.toString());
        expect(comparison).toEqual(0);
        result = EQParser.parse("1!");
        number = new NumberValue("1");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("1!");
        number = new NumberValue("1");
        comparison = result.compareTo(number);
        expect(comparison).toEqual(0);
        result = EQParser.parse("(6-2)!");
        number = new NumberValue("24");
        comparison = result.compareTo(number);
        return expect(comparison).toEqual(0);
      });
    });
  });

  describe("A Tokenizer", function() {
    var getVar;
    getVar = function(variable) {
      if (variable === "x") {
        return 5;
      } else {
        return null;
      }
    };
    it("exists in the calculator", function() {
      return expect(EQTokenizer).toBeDefined();
    });
    it("can split a statement into its component parts", function() {
      var list;
      EQTokenizer.tokenize("1 + 1", getVar);
      list = EQTokenizer.getList();
      expect(list).toEqual(["1", "+", "1"]);
      EQTokenizer.tokenize("2 - 2", getVar);
      list = EQTokenizer.getList();
      expect(list).toEqual(["2", "-", "2"]);
      EQTokenizer.tokenize("3 * 4", getVar);
      list = EQTokenizer.getList();
      expect(list).toEqual(["3", "*", "4"]);
      EQTokenizer.tokenize("10 / 2", getVar);
      list = EQTokenizer.getList();
      expect(list).toEqual(["10", "/", "2"]);
      EQTokenizer.tokenize("sin(x)", getVar);
      list = EQTokenizer.getList();
      return expect(list).toEqual(["sin(", "x", ")"]);
    });
    return it("can handle negative numbers", function() {
      var list;
      EQTokenizer.tokenize("-1 + 2", getVar);
      list = EQTokenizer.getList();
      expect(list).toEqual(["-1", "+", "2"]);
      EQTokenizer.tokenize("2 - 2", getVar);
      list = EQTokenizer.getList();
      expect(list).toEqual(["2", "-", "2"]);
      EQTokenizer.tokenize("3 * -4", getVar);
      list = EQTokenizer.getList();
      expect(list).toEqual(["3", "*", "-4"]);
      EQTokenizer.tokenize("300+7-2", getVar);
      list = EQTokenizer.getList();
      expect(list).toEqual(["300", "+", "7", "-", "2"]);
      EQTokenizer.tokenize("(10) - 2", getVar);
      list = EQTokenizer.getList();
      return expect(list).toEqual(["(", "10", ")", "-", "2"]);
    });
  });

}).call(this);

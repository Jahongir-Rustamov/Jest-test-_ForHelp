const Nfunct = require("../index");
describe("Numbers", () => {
  test("Should return a positive number if input is positive ", () => {
    const result = Nfunct.Numbers(1);
    expect(result).toBe(1);
  });

  test("Should return a positive number if input is negative ", () => {
    const result = Nfunct.Numbers(-1);
    expect(result).toBe(1);
  });

  test("Should return zero number if input is zero ", () => {
    const result = Nfunct.Numbers(0);
    expect(result).toBe(0);
  });
});

describe("Greeting", () => {
  it("Should return the greeting message...", () => {
    const result = Nfunct.salom("Jahongir");
    expect(result).toContain("Jahongir"); //toMatch(/Jahongir/) desa ham boladi.
  });
});

describe("getCurrencies", () => {
  it("should return default currencies", () => {
    const result = Nfunct.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["TRY", "UZS", "MYR"]));
  });
});

describe("Getobjects", () => {
  test("should return the products with the given ID", () => {
    const result = Nfunct.Getobjects(5);
    //1 Ixtiyoriy yozilaverilsin, qiymatlarning hammasini yozish (!shart)
    expect(result).toMatchObject({ id: 5, product: "banana" });
    //2 Aniq test bunda hamma elementlar bolishi shart
    expect(result).toEqual({ id: 5, price: 2, product: "banana" });
    //3 birorta elementi bolsa boldi true qaytadi
    expect(result).toHaveProperty("product", "banana"); //1-chi key word,2-chi value bolshi shart,Hamda turiga qarash shart
  });
});

//Xatolarni testlash
describe("registeruser", () => {
  it("should return error if username is falsy", () => {
    const falsyitme = [false, undefined, "", null, 0, NaN];
    falsyitme.forEach((falseIt) => {
      expect(() => {
        Nfunct.registeruser(falseIt);
      }).toThrow();
    });
  });
  it("should return user object if valid username is passed", () => {
    const result = Nfunct.registeruser("Admin");
    expect(result).toMatchObject({ userName: "Admin" });
    expect(result.id).toBeGreaterThan(0);
  });
});

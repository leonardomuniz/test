const useCase = require("../src/index");

describe("index", () => {
  afterEach(() => {
    useCase.setMoneyInWallet(0);
  });

  it("should return money on wallet", () => {
    const response = useCase.checkAmountInWallet();
    expect(response).toBe(0);
  });

  it("should add money on wallet", () => {
    const response = useCase.addMoneyOnWallet(500);
    expect(response).toBe(500);
  });

  it("should remove money on wallet correctly", () => {
    useCase.addMoneyOnWallet(500);
    useCase.removeMoneyOnWallet(500);
    const response = useCase.checkAmountInWallet();

    expect(response).toBe(0);
  });

  it("should throw error when you try to use more money then what you really have", () => {
    useCase.addMoneyOnWallet(500);

    expect(() => {
      useCase.removeMoneyOnWallet(1000);
    }).toThrow("saldo insuficiente");
  });
});

import { Cake } from "./Cake";

describe("Cake class", () => {
  it("calculate the cake price correctly", () => {
    const cake = new Cake({
      portionsCount: 10,
      height: 20,
      pricePerPerson: 5,
      advance: 50,
    });

    const expectedPrice = 10 * 5;
    expect(cake.priceCalc()).toBe(expectedPrice);
  });

  it("calculate the cake diameter correctly", () => {
    const cake = new Cake({
      portionsCount: 10,
      height: 9,
      pricePerPerson: 5,
      advance: 50,
    });

    // Calculate expected diameter based on known values
    const expectedDiameter = 15;
    expect(cake.calculateDiameter()).toBe(expectedDiameter);
  });
});

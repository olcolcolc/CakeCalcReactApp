import { Utils } from "./Utils";

export class Cake {
  private portionsCount: number;
  private pricePerPerson: number;
  private box: boolean;
  private allergies: boolean;
  private otherCheckbox: boolean;
  private otherPrice: number;
  private advancePercentage: number;

  constructor(
    portionsCount: number,
    pricePerPerson: number,
    box: boolean,
    allergies: boolean,
    otherCheckbox: boolean,
    otherPrice: number,
    advancePercentage: number
  ) {
    this.portionsCount = portionsCount;
    this.pricePerPerson = pricePerPerson;
    this.box = box;
    this.allergies = allergies;
    this.otherCheckbox = otherCheckbox;
    this.otherPrice = otherPrice;
    this.advancePercentage = advancePercentage;
  }

  private calculateLayerRatios(portionsCount: number): number[] | undefined {
    const layerRatios: number[] = [0, 0, 0];

    if (portionsCount > 76) return;

    if (portionsCount > 50) {
      layerRatios[0] = 0.465;
      layerRatios[1] = 0.32;
      layerRatios[2] = 0.24;
    } else if (portionsCount > 30) {
      layerRatios[0] = 0.65;
      layerRatios[1] = 0.35;
    } else {
      layerRatios[0] = 1;
    }

    return layerRatios;
  }

  public priceCalc(): [number, number] {
    let price: number = this.portionsCount * this.pricePerPerson;
    let boxPrice = 0;

    if (this.allergies) {
      price += this.portionsCount * 2;
    }

    if (this.box) {
      if (this.portionsCount <= 20) {
        boxPrice = 7;
      } else if (this.portionsCount <= 30) {
        boxPrice = 10;
      } else if (this.portionsCount <= 40) {
        boxPrice = 15;
      } else if (this.portionsCount > 40) {
        boxPrice = 20;
        price += boxPrice;
      }
    }

    if (this.otherCheckbox) {
      price += this.otherPrice;
    }

    return [price, boxPrice];
  }

  public squareCalc(): number[] {
    const layerRatios = this.calculateLayerRatios(this.portionsCount) || [1];
    const ONE_PORTION_FIELD = 36;
    const squareCakeSize: number = ONE_PORTION_FIELD * this.portionsCount;
    const squareSides: number[] = [];

    for (const layerRatio of layerRatios) {
      squareSides.push(Utils.calculateSquareSides(squareCakeSize, layerRatio));
    }

    return squareSides;
  }

  public rectCalc(): [number[], number[]] {
    const layerRatios = this.calculateLayerRatios(this.portionsCount) || [1];
    const ONE_PORTION_FIELD = 36;
    const rectCakeField: number = ONE_PORTION_FIELD * this.portionsCount;
    const cakeSidesA: number[] = [];
    const cakeSidesB: number[] = [];

    for (const layerRatio of layerRatios) {
      const cakeSideA: number = Utils.calculateSidesA(
        rectCakeField,
        layerRatio
      );
      const cakeSideB: number = Utils.calculateSidesB(cakeSideA);
      cakeSidesA.push(cakeSideA);
      cakeSidesB.push(cakeSideB);
    }

    return [cakeSidesA, cakeSidesB];
  }

  public roundCalc(): number[] {
    const layerRatios = this.calculateLayerRatios(this.portionsCount) || [1];
    const ONE_PORTION_FIELD = 22.8;
    const roundCakeField: number = ONE_PORTION_FIELD * this.portionsCount;
    const diameters: number[] = [];

    for (const layerRatio of layerRatios) {
      diameters.push(Utils.calculateDiameters(roundCakeField, layerRatio));
    }

    return diameters;
  }

  public advanceValueCalc(price: number): number {
    return (this.advancePercentage / 100) * price;
  }
}

export class Utils {
  static calculateSquareSides(
    squareCakeSize: number,
    layerRatio: number
  ): number {
    return Math.round(Math.sqrt(squareCakeSize * layerRatio));
  }

  static calculateSidesA(rectCakeField: number, layerRatio: number): number {
    return Math.round(Math.sqrt((rectCakeField * layerRatio) / 0.7));
  }

  static calculateSidesB(cakeSideA: number): number {
    return Math.round(cakeSideA * 0.7);
  }

  static calculateDiameters(
    roundCakeField: number,
    layerRatio: number
  ): number {
    return Math.round(2 * Math.sqrt((roundCakeField * layerRatio) / Math.PI));
  }
}

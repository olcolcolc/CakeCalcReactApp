export class Cake {
  private portionsCount = 0;
  private height = 0;
  private pricePerPerson = 0;
  private extras = 0;

  constructor(options: {
    portionsCount: number;
    height: number;
    pricePerPerson: number;
    advance: number;
  }) {
    Object.assign(this, options);
  }

  public priceCalc(): number {
    const price: number = this.portionsCount * this.pricePerPerson;
    return price + this.extras;
  }

  public calculateDiameter(): number {
    const ONE_PORTION_VOLUME = 145; //Hardcoded one portion volume = 145 cm3
    const roundCakeVolumeTotal = ONE_PORTION_VOLUME * this.portionsCount;
    const diameter = Math.sqrt(
      (4 * roundCakeVolumeTotal) / (Math.PI * this.height)
    );
    return Math.ceil(diameter);
  }
}

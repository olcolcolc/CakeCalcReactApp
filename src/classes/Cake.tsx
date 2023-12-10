// Represents a Cake and its properties
export class Cake {
  private portionsCount = 0; // Number of portions
  private height = 0; // Height of the cake
  private pricePerPerson = 0; // Price per person
  private advance = 0; // Advance percentage

  constructor(options: {
    portionsCount: number;
    height: number;
    pricePerPerson: number;
    advance: number;
  }) {
    Object.assign(this, options);
  }

  // Calculates the total price of the cake including the advance charge
  public priceCalc(): number {
    const price: number = this.portionsCount * this.pricePerPerson; // Base price
    return price + this.advance; // Adds the advance charge to the base price
  }

  // Calculates the diameter of the cake based on its volume and height
  public calculateDiameter(): number {
    const ONE_PORTION_VOLUME = 145; // Hardcoded one portion volume = 145 cm3

    const roundCakeVolumeTotal = ONE_PORTION_VOLUME * this.portionsCount; // Cake's total volume

    const diameter = Math.sqrt(
      (4 * roundCakeVolumeTotal) / (Math.PI * this.height)
    ); // Calculates the diameter

    return Math.ceil(diameter); // Returns the rounded-up diameter value
  }
}

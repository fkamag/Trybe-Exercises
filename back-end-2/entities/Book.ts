export default class Book {
  private id: number
  private title: string;
  private salePrice: number;
  private cost: number;

  constructor(value: string) {
    this.id = 0;
    this.title = value;
    this.salePrice = 0;
    this.cost= 0;
  }

  set _id(value: number) {
    this.id = value;
  }
  set _title(value: string) {
    this.title = value;
  }
  set _salePrice(value: number) {
    this.salePrice = value;
  }
  set _cost(value: number) {
    this.cost = value;
  }

  calculeProfit(): number {
    return this.salePrice - this.cost
  }

  calculateProfitMargin(): number {
    const margin = ((this.salePrice - this.cost) / this.salePrice * 100);
        return Number(margin.toFixed(2));
  }
}
import { expect } from 'chai';
import { describe } from 'mocha';
class Book {
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
}

describe('Teste da classe Book', () => {
  describe('Instancia da classe Book', () => {
    const objectBook = new Book('teste');
    it('Deveria instanciar um objeto da classe Book', () => {
      expect(objectBook).to.be.instanceOf(Book);
    })
    it('Deveria verificar atributos', () => {
      expect(objectBook).to.haveOwnProperty('id')
      expect(objectBook).to.haveOwnProperty('title')
      expect(objectBook).to.haveOwnProperty('salePrice')
      expect(objectBook).to.haveOwnProperty('cost')
    })
  })
})
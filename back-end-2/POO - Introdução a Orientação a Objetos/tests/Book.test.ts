import { expect } from 'chai';
import { describe } from 'mocha';
import Book from '../entities/Book';

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
    it('Deveria testar método calculeProfit', () => {
      objectBook._salePrice = 500
      objectBook._cost = 100
      expect(objectBook.calculeProfit()).to.be.equal(400)
    })
    it('Testando método calculateProfitMargin', () => {
      objectBook._salePrice = 500
      objectBook._cost = 100
      expect(objectBook.calculateProfitMargin()).to.be.equal(80);
    })
  })
})
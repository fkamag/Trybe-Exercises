import numpy as np
import sys

# define um array vazio de inteiros
myarray = np.array([], dtype=int)

# podemos adicionar alguns valores
myarray = np.insert(myarray, 0, 5)  # na posição 0 o valor 5
myarray = np.insert(myarray, 1, 3)
myarray = np.insert(myarray, 2, 5)
print("Após adicionar alguns valores: ", myarray)

# adicionar em uma posição intermediária
myarray = np.insert(myarray, 1, 4)
print("Após inserção em índice intermediário: ", myarray)


# remover um valor através do índice
myarray = np.delete(myarray, 0)
print("Após remover um valor:", myarray)


# compare o tamanho entre uma lista e um array
elements = list(range(100))  # definimos uma lista de 100 números
print("Tamanho da lista:", sys.getsizeof(elements))
print(elements)
# criamos um array a partir da lista
array_from_list = np.array(elements, dtype=int)
print("Tamanho do array", sys.getsizeof(array_from_list))
print(array_from_list)
print(array_from_list[0])

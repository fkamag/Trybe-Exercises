# Exercício 2
# Em um jogo de baralho, as cartas estão representadas
# por um array numérico. Para iniciar o jogo, devemos
# embaralhar as cartas. Faremos isto dividindo uma porção
# de cartas em 2 e depois mesclando as duas porções.

# Exemplo 1:
cartas1 = [2, 6, 4, 5]
# cartas por parte = 2
# resultado = [2, 4, 6, 5]

# Exemplo 2:
cartas2 = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3
# resultado = [1, 7, 4, 6, 4, 6]


def shuffle(arr):
    result = []
    middle = len(arr)//2
    for i in range(middle):
        result.extend(arr[i::middle])
    return result


print(f'carta 1: {shuffle(cartas1)}')
print(f'carta 2: {shuffle(cartas2)}')

# Exercício 1
# Em um software monitor,
# o qual verifica a resiliência de outro software,
# precisamos saber o tempo máximo que um software
# permaneceu sem instabilidades.
# Para isto, a cada hora é feito uma requisição ao sistema
# para verificamos se está tudo bem.
# Supondo um array que contenha os estados coletados por nosso software,
# calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.
# 1 - OK
# 0 - Instabilidades

valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

valores_coletados2 = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4


def verify_status(arr):
    max_count = 0
    counter = 0
    for i in range(len(arr)):
        if arr[i] == 1:
            counter = counter + 1
            if max_count < counter:
                max_count = counter
        if arr[i] == 0:
            counter = 0
    return max_count


print(f'resultado 1: {verify_status(valores_coletados1)}')
print(f'resultado 2: {verify_status(valores_coletados2)}')

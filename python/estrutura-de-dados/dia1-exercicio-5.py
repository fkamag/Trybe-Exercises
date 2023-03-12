# Exercício 5:
# Consulte a forma de se criar um dicionário chamado de dict comprehension
# e crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro.

def dict_comprehension(cont, limit):
    dict_comprehension = dict()
    while cont <= limit:
        dict_comprehension[cont] = cont * 2
        cont += 1

    return dict_comprehension


print(dict_comprehension(3, 20))

double = {i: i*2 for i in range(3, 21)}

print(double)

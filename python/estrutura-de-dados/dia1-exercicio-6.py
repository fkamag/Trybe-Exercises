# Para cada char na string:
# 	- Se o char não estiver no dicionário, inclua com o valor 1;
# 	- Se estiver, incremente o valor.
# Exemplo:
str1 = "bbbbaaaacccaaaaaaddddddddccccccc"
# saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}
str2 = "coxinha"
# saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# Explicação: Nenhuma letra repete em coxinha


def cont_char(str):
    result = dict()
    for i in range(len(str)):
        if str[i] in result:
            result[str[i]] += 1
        else:
            result[str[i]] = 1
    return result


print(cont_char(str1))
print(cont_char(str2))

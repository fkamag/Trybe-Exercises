hash_value1 = hash('a')
hash_value2 = hash('b')
hash_value3 = hash('ab')
hash_value4 = hash('ba')

# print(hash_value1)
# print(hash_value2)
# print(hash_value3)
# print(hash_value4)


class Person:
    def __init__(self, name, cpf):
        self.name = name
        self.cpf = cpf


books = {}
books['felipe'] = 'Hunter x Hunter'
books['junior'] = 'Diário de Motocicleta'

print(books)

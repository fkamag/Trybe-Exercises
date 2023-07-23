usuario = [{'cpf': '123456', 'name': "Fabio", 'password': "123456"}]


def login():
    print("Faça o login")
    cpf = input("CPF: ")
    return cpf


def buscar_usuario(user):
    print(user)


def menu():
    menu = """

[d] Depositar
[s] Sacar
[e] Extrato
[q] Sair

escolha a opção desejada => """
    return input(menu)


def operations():
    while True:
        option = menu()

        if option == 'd':
            deposito = float(input("Informe o valor do depósito: "))
            if deposito > 0:
                saldo += deposito
                extrato += f"depósito R$ {deposito:.2f} \n"
                print(f"depósito R$ {deposito:.2f} realizado! \n")
            else:
                print("Valor de depósito inválido")

        elif option == 's':
            if saque_diário < 3:
                saque = float(input("Informe o valor do saque: "))
                if saque < saldo:
                    if saque > 0:
                        saldo -= saque
                        extrato += f"saque R$ {saque:.2f} \n"
                        print(f"saque R$ {saque:.2f} realizado! \n")
                        saque_diário += 1
                    else:
                        print("Valor de saque inválido")
                else:
                    print("Saldo insuficiente!")
            else:
                print("Ultrapassado limite de 3 saques diários")
        elif option == 'e':
            if extrato:
                print("Extrato de operações" + "\n")
                print(extrato)
                print(f"Saldo: R$ {saldo:.2f} \n")
            else:
                print("Não foram realizadas movimentações" + "\n")
        elif option == 'q':
            print("Obrigado por utilizar nossos serviços!")
            break
        else:
            print("Opção inválida")


def main():
    user = login()
    buscar_usuario(user)


main()
print("FIM")

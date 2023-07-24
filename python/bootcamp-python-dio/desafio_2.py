usuer_list = [{
    'cpf': "admin",
    'name': "Admin",
    'password': "123456",
    'extrato': "",
    'saldo': 0
    }, ]


def menu():
    menu = """

[1] Fazer Login
[2] Criar Usuário
[3] Criar Conta
[4] FIM

escolha a opção desejada => """
    return input(menu)


def login():
    print("Faça o login")
    cpf = input("CPF: ")
    return cpf


def buscar_usuario(user):
    print(user)


def menu_user():
    menu = """

[d] Depositar
[s] Sacar
[e] Extrato
[q] Sair

escolha a opção desejada => """
    return input(menu)


def operations_admin():
    while True:
        option = menu()

        if option == '1':
            buscar_usuario(login())
        elif option == '2':
            print("Sistem Criar Usuário em Manutenção")
        elif option == '3':
            print("Sistema de Criar Conta em Manutenção")
        elif option == '4':
            print("Encerrando sistema")
            break
        else:
            print("Opção inválida")


def operations():
    while True:
        option = menu_user()

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
    operations_admin()


main()
print("FIM")

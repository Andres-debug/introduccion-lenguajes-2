# num1 = float(input("Ingrese el primer numero: "))
# num2 = float(input("Ingrese el segundo numero: "))
# operacion = input("Ingrese la operacion (+, -, *, /): ")

# if operacion == "+":
#     resultado = num1+num2
# elif operacion == "-":
#     resultado = num1-num2
# elif operacion == "*":
#     resultado= num1*num2
# elif operacion=="/" and num2 !=0:
#     resultado= num1/num2
# else:
#     resultado = "Operacion no valida"

# print(f"Resultado {resultado}")

# contador = 0

# while True:
#     numero = int(input("Ingrese un numero: "))
#     if numero<0:
#         break
#     contador+=1

# print(f"Cntidad de numero positivos ingresados: {contador}")

# numero= int(input("Ingrese un numero: "))
# factorial=1

# for i in range(1,numero+1):
#     factorial *=i

# print(f"Factorial: {factorial}")

# inicio= int(input("Ingrese el numero inicial: "))
# fin= int(input("Ingrese el numero final: "))

# for i in range(inicio,fin+1):
#     if i % 2 ==0:
#         print(i)

import random

numero_secreto = random.randint(1,50)

while True:
    intento = int(input("Ingrese el numero: "))

    if intento == numero_secreto:
        print("Adivinaste")
        break
    elif intento > numero_secreto:
        print("Muy alto")
    else:
        print("Muy Bajo")
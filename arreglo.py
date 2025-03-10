numeros = [10,20,30,40,67,89,8,5,22]
# print(numeros)

# numeros.append(20) #Agrega al final del array
# print(numeros)
# numeros.insert(0,45) #Agrega al inicio del array
# print(numeros)
# numeros.pop() #Elimina el ultimo del array
# print(numeros)
# numeros.pop(0) #Elimina el primero
# print(numeros)
# del numeros[4] #Elimina por indice
# print(numeros)

numeros.sort() #Orden ASC
print(numeros)
numeros.sort(reverse=True) #Orden DESC

mayores_de_10 = [num for num in numeros if num >10] #filter
print(mayores_de_10)
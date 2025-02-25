numeros =[10,5,8,20,15]

print("Lista Original",numeros)

numeros.append(25);
print("Despues de agregar el 25",numeros)

eliminado = numeros.pop()
print ("Lista despues de eliminar el ultimo", numeros)

numeros.sort()
print("Lista ordenada",numeros)

buscar = 3

encontrado = buscar in numeros
print(f"¿El numero {buscar} esta en la lista? {'Si' if encontrado else 'No'}")

for num in numeros:
    print(num)

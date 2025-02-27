# numeros =[10,5,8,20,15]

# print("Lista Original",numeros)

# numeros.append(25);
# print("Despues de agregar el 25",numeros)

# eliminado = numeros.pop()
# print ("Lista despues de eliminar el ultimo", numeros)

# numeros.sort()
# print("Lista ordenada",numeros)

# buscar = 3

# encontrado = buscar in numeros
# print(f"¿El numero {buscar} esta en la lista? {'Si' if encontrado else 'No'}")

# for num in numeros:
#     print(num)

estudiantes = [
    {"nombre": "Juan", "calificacion":90},
    {"nombre": "Pedro", "calificacion":78}
]

def agregar_estudiante():
    nombre=input("Ingrese el nombre dle estudiante")
    try:
        calificacion = float(input(f"Ingrese la calificacion de: {nombre}"))
        if calificacion <0 or calificacion>100:
            print("Calificacion invalida. Debe ser entre 0 y 100")
            return
        estudiantes.append({"nombre":nombre,"calificacion":calificacion})
        print("Estudiante agregado correctamente")
    except ValueError:
        print("Entrada invalida. Debe de ingresar un numero")


def eliminar_estudiante():
    nombre = input("Ingrese el nombre dle estudiante a eliminar: ")
    global estudiantes
    estudiantes = [estudiante for estudiante in estudiantes if estudiante["nombre"].lower() != nombre.lower()]
    print("Estudiante eliminado correctamente")

eliminar_estudiante()
print(estudiantes)
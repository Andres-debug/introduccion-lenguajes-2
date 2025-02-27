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

def mostrar_estudiantes():
    if not estudiantes:
        print("No hay estudiantes registrados")
        return
    print("Lista de estudiantes: ")
    for estudiante in estudiantes:
        print(f"-{estudiante["nombre"]}: {estudiante["calificacion"]}")

def calcular_promedio():
    if not estudiantes:
        print("No hay estudiantes registrados")
        return
    promedio = sum(estudiante["calificacion"] for estudiante in estudiantes) / len(estudiantes)
    print(f"Promedio de calificaciones: {promedio:.2f}")

def mostrar_calificaciones_extremas():
    if not estudiantes:
        print("No hay calificaciones")
        return
    calificaciones = [estudiante["calificacion"] for estudiante in estudiantes]
    print(f"Calificacion mas alta: {max(calificaciones)}")
    print(f"Calificacion mas baja: {min(calificaciones)}")
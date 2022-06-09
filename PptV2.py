from cgi import print_arguments
import tkinter as tk
import random
import time

ventana = tk.Tk()
ventana.title("Juego PpT")
etiqueta1 = tk.Label(ventana,text="Jugar piedra, papel, o tijeras")

Etiq2 = tk.Label(ventana,text="Elige una opción").pack()

Bpapel = tk.button(ventana, text="Papel", Command=lambda:piedra_tijera_papel(1))
BPiedra = tk.button(ventana, text="Piedra", Command=lambda:piedra_tijera_papel(2))
BTijeras = tk.button(ventana, text="Tijeras", Command=lambda:piedra_tijera_papel(3))

Etiq3 = tk.Label(ventana,text="La computadsora eligió: ").pack()

Etiq4 = tk.Label(ventana,text="El ganador fue: ").pack()

ventana.mainloop()

def piedra_tijera_papel(usuario):
#Asignar la piedra papel y tijeras
        vencecom = False

        if usuario in  1 and vencecom in 3 = vencecom = True
                if usuario in  2 and vencecom in 1 = vencecom = True
                        if usuario in  3 and vencecom in 2 = vencecom = True:
        
        if vencecom in False print_arguments ("El jugador gano")
        else vencecom in True print_arguments("La computadora gano")
        #Elección random de computadora
                Computadora = random.choice([1,2,3])
         
                time.sleep(.5)

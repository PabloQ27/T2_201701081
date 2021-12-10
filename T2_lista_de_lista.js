class Nodo1{
    constructor(nombre, lista){
        this.nombre = nombre
        this.lista = lista
        this.sig = null
    }
}

class Lista1{
    constructor(){
        this.cabeza = null
    }
    add1(nombre, lista){
        let nuevo = new Nodo1(nombre, lista)
        if (this.cabeza == null){
            this.cabeza = nuevo
        }else{
            let temp = this.cabeza
            while(temp.sig != null){
                temp = temp.sig
            }
            temp.sig = nuevo
        }
    }

    ver1(){
        if (this.cabeza == null){
            console.log("Ta vacio 1")
        }else{
            let temp = this.cabeza
            while(temp != null){
                console.log("Nombre: ",temp.nombre)
                let temp2 = temp.lista.cabeza
                if (temp2 == null){
                    console.log("Lista de numeros vacia")
                }else{
                    while (temp2 != null){
                        console.log("Num: ",temp2.num)
                        temp2 = temp2.sig
                    }
                }
                temp = temp.sig
                console.log("")
            }
        }
    }
}


class Nodo2{
    constructor(num){
        this.num = num
        this.sig = null
    }

}

class Lista2{
    constructor(){
        this.cabeza = null
    }
    add2(num){
        let nuevo = new Nodo2(num)
        if (this.cabeza == null){
            this.cabeza = nuevo
        }else{
            let temp = this.cabeza
            while(temp.sig != null){
                temp = temp.sig
            }
            temp.sig = nuevo
        }
    }

    ver2(){  
        if (this.cabeza == null){
            console.log("Lista de num vacia")
        }else{
            let temp = this.cabeza
            while(temp != null){
                console.log(temp.num)
                temp = temp.sig
            }
        }

    }
}

let lista1 = new Lista1()
let L1 = new Lista2()
L1.add2(1)
L1.add2(2)
L1.add2(3)
lista1.add1("Pablo",L1)

let L2 = new Lista2()
lista1.add1("Piter",L2)

let L3 = new Lista2()
L3.add2(4)
L3.add2(3)
L3.add2(2)
lista1.add1("Juanito",L3)
lista1.ver1()

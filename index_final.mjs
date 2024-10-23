import { leerSuperheroes,  agregarSuperheroes } from "./utlis_final.mjs";

    const archivoOriginal = './superheroes.txt';
    const archivoNuevos = './agregarSuperheroes.txt';

    //agregar nuevos superheroes
    agregarSuperheroes(archivoOriginal, archivoNuevos);

    //Leer y mostrar la lista de superheroes ordenada
    const superheroes = leerSuperheroes(archivoOriginal);
    console.log('Superheroes ordenados: ');
    console.log(superheroes);

    


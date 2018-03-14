export class Idea {
    id;
    nombre;
    genero;
    resumen;
    voto;
    autor;


    constructor(id, nombre, genero, resumen, voto, autor) {
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.resumen = resumen;
        this.voto = voto;
        this.autor = autor;
    }

}

export const IDEAPELICULAS = [
    {
        id: 1,
        nombre: 'sharknado',
        genero: 'Terror',
        resumen: 'Julio hay tiburones volando',
        voto: '3',
        autor: 'jejeje'
    },
    {
        id: 2,
        nombre: 'sharknado2',
        genero: 'Romantica',
        resumen: 'Julio hay tiburones volando 2',
        voto: '4',
        autor: 'jejeje2'
    },
    {
        id: 3,
        nombre: 'sharknado3',
        genero: 'Aventura',
        resumen: 'Julio hay tiburones volando 3',
        voto: '5',
        autor: 'jejeje3'
    },
    {
        id: 4,
        nombre: 'sharknado4',
        genero: 'Ciencia-Ficcion',
        resumen: 'Julio hay tiburones volando 4',
        voto: '3',
        autor: 'jejeje4'
    },
    {
        id: 5,
        nombre: 'sharknado5',
        genero: 'Comedia',
        resumen: 'Julio hay tiburones volando 5',
        voto: '1',
        autor: 'jejeje5'
    },
    {
        id: 6,
        nombre: 'Arañas gigantes escupe lava',
        genero: 'Aventura',
        resumen: 'Julio hay tiburones volando',
        voto: '2',
        autor: 'jejeje6'
    },
    {
        id: 7,
        nombre: 'Hormigas gigantes',
        genero: 'Ciencia-Ficcion',
        resumen: 'Julio hay tiburones volando',
        voto: '3',
        autor: 'jejeje7'
    },
    {
        id: 8,
        nombre: 'Pulpo gigante en Japon',
        genero: 'Comedia',
        resumen: 'Julio hay tiburones volando',
        voto: '3',
        autor: 'jejeje8'
    },
    {
        id: 9,
        nombre: 'Yo en el inserso',
        genero: 'Romantica',
        resumen: 'Julio hay tiburones volando',
        voto: '3',
        autor: 'jejeje9'
    },
    {
        id: 10,
        nombre: 'Mi nota',
        genero: 'Terror',
        resumen: 'esperemos que sea mejor que el voto',
        voto: '5',
        autor: 'jejeje10'
    }

];

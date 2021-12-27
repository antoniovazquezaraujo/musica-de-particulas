import {getNoteName, Tonality,getScaleByNum, Scale} from './Scale.js';
 

export class Instrument {
    channel:number=0;
    scale: number = 0;        //Escala usada (1-6)
    tonality: number = Tonality.D;     //En qué tonalidad está el círculo (1-12)
    timbre: number = 1;       //El sonido seleccionado para ese círculo
    notes: number[] = [];      //Notas seleccionadas para tocar por un player
} 
 
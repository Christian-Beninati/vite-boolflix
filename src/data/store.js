// Funzione Reactive di Vue per creare un oggetto che si aggiorna 
import { reactive } from "vue";

// Esporto la variabile Store con funzione Reactive
export const store = reactive({
    
    // proprietà "movies" vuota.
    movies: [],
    series: [],
    imageBaseUrl: 'https://image.tmdb.org/t/p/w342',
});
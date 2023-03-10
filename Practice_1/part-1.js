/* Задание на урок:
// ч.1

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';


// 1)
const numberOfFilms = prompt('Скільки фільмів ви вже подивились?');

// 2)
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};


// 3)
const movies = function () {
   let lastWatchFilm = prompt('Один із останніх переглянутих фільмів?');
   let whatIsRating = +prompt('Як його оцінете по 10 бальній шкалі');
   personalMovieDB.movies[lastWatchFilm] = whatIsRating;
};

movies();
movies();

console.log(personalMovieDB);


// Масиви та об'єкти:
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".










// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let user1 = {
    title: "Гаррі Поттер і філософський камінь",
    pageCount: 336,
    genre: "фентезі"
};

let user2= {
    title: "Гра Престолів",
    pageCount: 694,
    genre: "фентезі"
};

let user3 = {
    title: "Шерлок Холмс",
    pageCount: 544,
    genre: "детектив"
};
console.log(user1)
console.log(user2)
console.log(user3)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let user4 = {
    title: "Гаррі Поттер і філософський камінь",
    pageCount: 336,
    genre: "фентезі",
    authors: [
        { name: "Джоан Роулінг", age: 56 }
    ]
};
let user5 = {
    title: "Гра Престолів",
    pageCount: 694,
    genre: "фентезі",
    authors: [
        { name: "Джордж Мартін", age: 73 }
    ]
};
let user6 = {
    title: "Шерлок Холмс",
    pageCount: 544,
    genre: "детектив",
    authors: [
        { name: "Артур Конан Дойл", age: 71 }
    ]
};
console.log(user4)
console.log(user5)
console.log(user6)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    { name: "Іван", username: "ivan123", password: "qwerty123" },
    { name: "Марія", username: "maria456", password: "abc123" },
    { name: "Петро", username: "petro789", password: "password123" },
    { name: "Олена", username: "olena1011", password: "pass1234" },
    { name: "Анна", username: "anna1314", password: "password" },
    { name: "Олексій", username: "oleksiy1516", password: "hello123" },
    { name: "Катерина", username: "katerina1718", password: "password456" },
    { name: "Василь", username: "vasyl1920", password: "welcome123" },
    { name: "Наталія", username: "natalia2122", password: "pass-pass" },
    { name: "Андрій", username: "andriy2324", password: "12345678" }
];
users.forEach(user => {
    console.log(user.password);
});
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temperatures = [
    // Понеділок
    [18, 24, 20], // Вранці, вдень, ввечері
    // Вівторок
    [17, 23, 19],
    // Середа
    [19, 25, 21],
    // Четвер
    [16, 22, 18],
    // П'ятниця
    [20, 26, 22],
    // Субота
    [21, 27, 23],
    // Неділя
    [22, 28, 24]
];
console.log(temperatures);

let x = 1;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
let time = 35;
let quarter = Math.ceil(time / 15);
console.log('Четвертя години:', quarter);
let day = 17;
let halfOfMonth = Math.ceil(day / 10);
console.log('Половина місяця:', halfOfMonth);
let dayOfWeek = 3;
let plan;

switch (dayOfWeek) {
    case 1:
        plan = 'Понеділок - тренування';
        break;
    case 2:
        plan = 'Вівторок - зустріч з друзями';
        break;
    case 3:
        plan = 'Середа - відвідати лікаря';
        break;
    case 4:
        plan = 'Четвер - засідання клубу';
        break;
    case 5:
        plan = 'Пятниця - кіно';
        break;
    case 6:
        plan = 'Субота - відпочинок';
        break;
    case 7:
        plan = 'Неділя - сімейний обід';
        break;
}
console.log(plan);
let num1 = 10;
let num2 = 7;
let max;

if (num1 > num2) {
    max = num1;
} else if (num2 > num1) {
    max = num2;
} else {
    max = 'Числа рівні';
}

console.log('Максимальне число:', max);
let X = 0;

if (!x) {
    x = 'default';
}
console.log(x);
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.forEach(course => {
    if (course.monthDuration > 5) {
        console.log('Супер');
    }
});

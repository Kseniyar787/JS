//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа



var answers = [];


function isCorrectAnswer(text, count) {
    var events, ok;

    do {//Выводим первый вопрос
        ok = false; //предполагаем, что человек ввел неправильное значение.
        events = +prompt(text + '-1 - Выход из игры');

        if (events == -1) {
            break;
        }

        else {
            ok = isAnswer(count, events);
        }
    } while (!ok); // делаем пока выполняется условие false
    return events;
}

var events = isCorrectAnswer(works.a00 + works.a1 + works.a2, works.a0);
answers.push({ question: works.a00, answer: events == 1 ? works.a1 : works.a2 })


switch (events) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        events = isCorrectAnswer(works.b00 + works.b1 + works.b2, works.b0);
        answers.push({ question: works.b00, answer: events == 1 ? works.b1 : works.b2 })
        switch (events) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                events = isCorrectAnswer(works.d00 + works.d1 + works.d2, works.d0);
                answers.push({ question: works.d00, answer: events == 1 ? works.d1 : works.d2 })
                break;

            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                events = isCorrectAnswer(works.d00 + works.d1 + works.d2, works.d0);
                answers.push({ question: works.d00, answer: events == 1 ? works.d1 : works.d2 })
                break;

            case -1: // Второе действие
                break;

            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну

        events = isCorrectAnswer(works.c00 + works.c1 + works.c2, works.c0);
        answers.push({ question: works.c00, answer: events == 1 ? works.c1 : works.c2 })
        switch (events) {
            case 1: // Второе действие
                events = isCorrectAnswer(works.d00 + works.d1 + works.d2, works.d0);
                answers.push({ question: works.d00, answer: events == 1 ? works.d1 : works.d2 })
                break;

            case 2: // Второе действие
                events = isCorrectAnswer(works.d00 + works.d1 + works.d2, works.d0);
                answers.push({ question: works.d00, answer: events == 1 ? works.d1 : works.d2 })
                break;

            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

while (true) {
    var cheakInfo = isCorrectAnswer("Введите номер вопроса от 1 до " + answers.length + " и мы напомним условие и ваш ответ. \n Для выхода введите -1 ", answers.length);
    if (cheakInfo == -1)
        break;
    alert(answers[cheakInfo - 1].question + '\nВы выбрали ответ: ' + answers[cheakInfo - 1].answer);
}



//------------------------------------------
function isAnswer(q, events) {
    if (isNaN(events) || !isFinite(events)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (events < 1 || events > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}







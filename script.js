function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

var thead = document.getElementsByTagName('thead')[0];
var thead_style = thead.style;
var thead_first_row = thead.children[0]
var cell_for_dz_count = thead_first_row.children[thead_first_row.children.length - 1]

cell_for_dz_count.innerHTML = 'Загрузка...'
document.title = 'Загрузка...'

thead_style.zIndex = '1';
thead_style.background = 'white';
thead_style.position = 'sticky';
thead_style.top = '0'


waitForElm('.sorting_1').then(() => {
    document.title = 'Загружено!'
    var names = $('.sorting_1')
    var unchecked = $('i[class="ri-time-line text-orange"]')
    var checked_lenght = $('span[title*="Завершено"]').length - unchecked.length

    for (var cell of unchecked){
        cell.parentElement.parentElement.parentElement.parentElement.style.background = "#fac0c0"
    }

    for (var name of names){
        name.style.position = 'sticky';
        name.style.left = '0';
        name.style.background = 'white';
    }

    if (!checked_lenght){checked_lenght = 0}
    if (!unchecked){unchecked = 0}

    cell_for_dz_count.innerHTML = `Количество непроверенных дз - ${unchecked.length}; Количество проверенных дз - ${checked_lenght}`;
})
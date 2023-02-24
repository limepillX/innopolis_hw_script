// ==UserScript==
// @name         InnopolisHWTable
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       FedorYakovenko
// @match        https://learn.innopolis.university/Instructors/Trainings/*/ProgressLightweight*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=innopolis.university
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Observer to wait until element is loaded 
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

    // Add sound button
    var button_to_add = document.createElement("button");
    button_to_add.classList.add("btn", "btn-primary", "mt-2")
    button_to_add.id = "sound_button"
    button_to_add.type = "button"
    button_to_add.textContent = "Проиграть звук после загрузки"
    document.getElementsByClassName("text-right")[0].appendChild(button_to_add)

    // Button onclick listener
    document.getElementById('sound_button').addEventListener('click', () => {
        var snd = new Audio("data:audio/mpeg;base64,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");
        button_to_add.disabled = true;
        button_to_add.innerHTML = "Звук будет проигран";
        snd.play()

        waitForElm('.sorting_1').then(() => {
            snd.play()
            button_to_add.remove()
        })
    }
    )

    // Make row sticky
    var thead = document.getElementsByTagName('thead')[0];
    thead.style.zIndex = '1';
    thead.style.background = 'white';
    thead.style.position = 'sticky';
    thead.style.top = '0'

    // Загрузка...
    var cell_for_dz_count = thead.children[0].children[4]
    cell_for_dz_count.innerHTML = 'Загрузка...'
    document.title = 'Загрузка...'

    // When table is loaded
    waitForElm('.sorting_1').then(() => {
        document.title = '(!) Загружено!'
        var names = $('.sorting_1')
        var unchecked = $('i[class="ri-time-line text-orange"]')
        var checked_lenght = $('span[title*="Завершено"]').length - unchecked.length

        // make names sticky
        for (var name of names) {
            name.style.position = 'sticky';
            name.style.left = '0';
            name.style.background = 'white';
        }

        // Highlight unchecked homeworks
        for (var cell of unchecked) {
            cell.parentElement.parentElement.parentElement.parentElement.style.background = "#fac0c0"
        }

        // Write homeworks amount
        if (!checked_lenght) { checked_lenght = 0 }
        if (!unchecked) { unchecked = 0 }
        cell_for_dz_count.innerHTML = `Количество непроверенных дз - ${unchecked.length}; Количество проверенных дз - ${checked_lenght}`;

    })

})();
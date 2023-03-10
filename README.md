# Скрипт для более приятной работы странички с проверкой ДЗ на сайте learn.innopolis.university

## Что добавляет этот скрипт
1. ### Статус загрузки в названии вкладки
Так как получение списка домашних заданий занимает время, теперь вы спокойно можете находится на другой вкладке, занимаясь своими делами, иногда посматривая на название.

![image](https://user-images.githubusercontent.com/59223504/220987731-820ee388-eaf0-4f0e-bae9-efc03af271ea.png)
![image](https://user-images.githubusercontent.com/59223504/220987746-2322292c-bca8-423b-acc5-b2b1948bd61d.png)

2. ### Проигрывание звука после загрузки заданий (опционально)
При условии нажатой после загрузки страницы кнопки, после полученного списка ДЗ проиграется звуковое уведомление.

![image](https://user-images.githubusercontent.com/59223504/221047162-ed197a0b-6d96-4600-a568-46095b345881.png)

3. ### Отображение количества проверенных и непроверенных домашних заданий.
Для отчётности иногда требуется сверить количество проверенных домашних заданий на площадке и в вашей таблице. Данный скрипт позволяет вам посмотреть их.

![image](https://user-images.githubusercontent.com/59223504/220990460-5ec42e55-94ec-447e-b35a-366c80e2c95e.png)

4. ### Подсветка непроверенных дз
Чтобы долго не искать то самое ДЗ, которое вы ещё не проверили - оно будет подсвечено для Вас.

![image](https://user-images.githubusercontent.com/59223504/220990758-7cca6848-dd3f-46d4-92d5-152b31067397.png)

5. ### Закрепление строчки с номерами ДЗ и столбика с фамилиями.
Из-за того, что таблица массивная, когда Вы скроллите далеко направо или вниз, Вы перестаёте видеть номера ДЗ и ФИО студентов. Это тоже поправил.

![image](https://user-images.githubusercontent.com/59223504/220991683-0f4fd79e-9775-4ebd-95f0-a0e85cb6cdea.png)

***To-do:***
 - [x] Добавить воспроизведение звука при загрузке домашек.
 - [ ] Сделать кнопку, которая будет выгружать проверенные ДЗ в виде таблицы
<hr>

# Порядок установки скрипта
1. Для работы скрипта требуется установить расширение для браузера **Tampermonkey**, [ссылка](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en).

2. После установки **Tampermonkey**, справа вверху должен появится значок:

![image](https://user-images.githubusercontent.com/59223504/220985464-622d2760-8b98-469f-97f1-3fce41fa5033.png)

3. Кликаем на него, появится список:

![image](https://user-images.githubusercontent.com/59223504/220985739-068a5d0c-c647-4b48-9ffa-8e0379b0c749.png)

4. Нажимаем на кнопку ```Создать новый скрипт```, вас перебросит на страницу создания скрипта:

![image](https://user-images.githubusercontent.com/59223504/220985862-c551c92b-0e0b-410d-ac48-077bc4b1773c.png)

5. Заменяем скрипт на код из файла в этом репозитории. Сохраняем (ctrl+s), заходим страницу с ДЗ и наслаждаемся.

### Готово, теперь при каждой загрузке страницы с ДЗ будет выполнятся код. Важно чтобы стояла выборка на 50+ студентов за раз, иначе не будет работать подсчёт ДЗ.

***Оставить отчёт о багах можно здесь***, [ссылка](https://github.com/limepillX/innopolis_hw_script/issues)

***Найти меня можно в телеграме, [@fiodoryakovenko](https://t.me/fiodoryakovenko) (кликабельно)***

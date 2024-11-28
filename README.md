# Задачи
- Определиться с дизайном и [брендбуком](https://www.google.com/search?q=%D0%B1%D1%80%D0%B5%D0%BD%D0%B4+%D0%B1%D1%83%D0%BA&oq=%D0%B1%D1%80%D0%B5%D0%BD%D0%B4+%D0%B1%D1%83%D0%BA&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM1NTFqMGoxqAIIsAIB&sourceid=chrome&ie=UTF-8#:~:text=%D0%91%D1%80%D0%B5%D0%BD%D0%B4%D0%B1%D1%83%D0%BA%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%20%D1%81%20%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%BC%20%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC%20%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D0%B0%3A%20%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D1%8F%20%D0%BE%D1%82%20%D1%84%D0%B8%D0%BB%D0%BE%D1%81%D0%BE%D1%84%D0%B8%D0%B8%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8%2C%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%BD%D1%87%D0%B8%D0%B2%D0%B0%D1%8F%20%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B0%D0%BC%D0%B8%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%BE%D0%B2%D0%BA%D0%B8%20%D1%80%D0%B0%D0%B7%D0%BD%D1%8B%D1%85%20%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B9%20%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0.%20%D0%A2%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%20%D0%BE%D1%82%20%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20brand%20book%20(%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%20%D0%B1%D1%83%D0%BA)%20%D0%B8%20%D0%B4%D0%BE%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D0%BE%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D1%81%D1%8F%20%D0%BA%D0%B0%D0%BA%20%C2%AB%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0%20%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D0%B0%C2%BB)
- [Таск система](https://imgs.yagla.ru/blog/1925/trello-1646582384.png) графиков заказов с возможностью печати на принтере формата листа A4, так и на чековом [аппарате по распечатке артикулов](https://mertech.ru/image/catalog/articles/printery/pechat-etiketok-na-marketplacy.jpg). Добавить возможность перетаскивания графиков и их группировки
- Система мониторинга состояния оборудования (запас чернил, листов, нагрузки и статуса (работает, простаивает, на ремонте)
- Внедрить шаблонную палитру (возможность смены темы сайта)
- Создать учётные записи сотрудников
- Создать список заказчиков
- Создать модуль бухгалтерии (это большая работа и пока отложена)

# Вариации UI/UX
## Грузоперевозки
![вариант 1](https://i.pinimg.com/736x/19/0a/f8/190af81041f08ef23cc39cfc036139c9.jpg)
![вариант 2](https://cdn.dribbble.com/userupload/8717156/file/original-93f5beb3bca813430df3da5d3e1b9d93.png?resize=752x)

## Состояние аппаратуры
![вариант 1](https://www.printvisor.com/media/2021/08/printvisor-interface-2.png)
![вариант 2](http://www.printstore.ru/images/snmp_discovery_monitoring_preview.jpg)
![вариант 3](https://static.tildacdn.com/tild3762-6336-4965-b438-303536346330/Screenshot_at_Mar_24.png)



<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Title</title>
        <link rel="stylesheet" href="styles.css" />
        <script src="script.js"></script>
    </head>

    <style>
        .wrapper {
            width: 60%;
            margin: auto;
        }

        body {
            font-family: sans-serif;
        }

        .card {
            margin: 10px;
            width: 200px;
            padding: 10px;
            text-align: center;
            border: 4px solid black;
        }
    </style>

    <body>
        <div class="wrapper">
            <div class="card" id="A">
                <p>заказчик (Лукоил)</p>
                <p>материал (Самоклейка)</p>
                <p>артикул (ОА210005)</p>
                <p>кол-во (35)</p>
                <p>Примечание (отдать на пост печать)</p>
                <p>дата (28.11.24)</p>
                <p></p>
            </div>

            <div class="card" id="A">
                <p>Н356346Р</p>
                <p>Лукоил</p>
                <p>Банка варенья</p>
                <p>Самоклейка 170 г/м<sup>2</sup></p>
                <p>ОА210005</p>
                <p>кол-во (35)</p>
                <p>Примечание (отдать на пост печать)</p>
                <p>28.11.24</p>
                <p></p>
            </div>

            <div class="card" id="A">
                <p>Н356346Р</p>
                <p>Лукоил</p>
                <p>Банка варенья</p>
                <p>Самоклейка 170 г/м<sup>2</sup></p>
                <p>ОА210005</p>
                <p>кол-во (35)</p>
                <p>Примечание (отдать на пост печать)</p>
                <p>28.11.24</p>
                <p></p>
            </div>

            <div class="card" id="A">
                <p>Н356346Р</p>
                <p>Лукоил</p>
                <p>Банка варенья</p>
                <p>Самоклейка 170 г/м<sup>2</sup></p>
                <p>ОА210005</p>
                <p>кол-во (35)</p>
                <p>Примечание (отдать на пост печать)</p>
                <p>28.11.24</p>
                <p></p>
            </div>

            <div class="card" id="A">
                <p>Н356346Р</p>
                <p>Лукоил</p>
                <p>Банка варенья</p>
                <p>Самоклейка 170 г/м<sup>2</sup></p>
                <p>ОА210005</p>
                <p>кол-во (35)</p>
                <p>Примечание (отдать на пост печать)</p>
                <p>28.11.24</p>
                <p></p>
            </div>

            <div class="card" id="A">
                <p>Н356346Р</p>
                <p>Лукоил</p>
                <p>Банка варенья</p>
                <p>Самоклейка 170 г/м<sup>2</sup></p>
                <p>ОА210005</p>
                <p>кол-во (35)</p>
                <p>Примечание (отдать на пост печать)</p>
                <p>28.11.24</p>
                <p></p>
            </div>

            <div class="card" id="A">
                <p>Н356346Р</p>
                <p>Лукоил</p>
                <p>Банка варенья</p>
                <p>Самоклейка 170 г/м<sup>2</sup></p>
                <p>ОА210005</p>
                <p>кол-во (35)</p>
                <p>Примечание (отдать на пост печать)</p>
                <p>28.11.24</p>
                <p></p>
            </div>

            <div class="card" id="A">
                <p>Н356346Р</p>
                <p>Лукоил</p>
                <p>Банка варенья</p>
                <p>Самоклейка 170 г/м<sup>2</sup></p>
                <p>ОА210005</p>
                <p>кол-во (35)</p>
                <p>Примечание (отдать на пост печать)</p>
                <p>28.11.24</p>
                <p></p>
            </div>

            <div class="card" id="A">
                <p>Н356346Р</p>
                <p>Лукоил</p>
                <p>Банка варенья</p>
                <p>Самоклейка 170 г/м<sup>2</sup></p>
                <p>ОА210005</p>
                <p>кол-во (35)</p>
                <p>Примечание (отдать на пост печать)</p>
                <p>28.11.24</p>
                <p></p>
            </div>


        </div>
    </body>

document.addEventListener("DOMContentLoaded", () => {

    //! Tabs ------------------
    const tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() { // Скрываем все элементы
        tabsContent.forEach(item => {
            // Можно скрыть элемент напрямую:
            // item.style.display = "none";

            // А можно скрыть элемент через классы:
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        // Убираем класс активности со всех элементов
        tabs.forEach(tab => {
            tab.classList.remove("tabheader__item_active");
        });
    }

    // Функция показа конкретного таба
    function showTabContent(i = 0) { // По умолчанию отображает первый элемент
        // Отображаем нужный элемент напрямую
        // tabsContent[i].style.display = "block";

        // Либо отображаем элементы через классы
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");

        // Добавляем класс активности - шрифт больше и жирнее
        tabs[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    // Накинем ивент на дочерние элементы через родителя
    tabsParent.addEventListener('click', (event) => {
        const target = event.target; // Немного упрощаем жизнь

        // Тут мы проверяем, что мы попали в таб, а не в родителя
        if (target && target.classList.contains('tabheader__item')) {
            // А тут уже выполняем действие
            tabs.forEach((item, i) => {
                // Если тот эленмент, на который мы тыкнули, совпадает с итерируемым
                if (target == item) {
                    // То мы скрываем все классы активности
                    hideTabContent();
                    // И накидываем класс на индексовый элемент
                    showTabContent(i);
                }
            });
        }
    });

    //! Timer --------------------

    const deadline = '2021-08-31';

    function getTimeRemaining(endTime) {

        let days, hours, minutes, seconds;
        const time = Date.parse(endTime) - Date.parse(new Date());

        if (time > 0) {
            days = Math.floor(time / (1000 * 60 * 60 * 24));
            hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((time / 1000 / 60) % 60);
            seconds = Math.floor((time / 1000) % 60);
        } else {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }

        return {
            time,
            days,
            hours,
            minutes,
            seconds,
        };
    }

    function takeZero(num) {
        if (num >=0 && num < 10) {
            return `0${num}`;
        }
        return num;
    }

    function clockTime(selector, endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();
        function updateClock() {
            const time = getTimeRemaining(endTime);

            days.innerHTML = takeZero(time.days);
            hours.innerHTML = takeZero(time.hours);
            minutes.innerHTML = takeZero(time.minutes);
            seconds.innerHTML = takeZero(time.seconds);

            if (time.time <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    clockTime(".timer", deadline);

    //! Modal Window ------------------------

    const modal = document.querySelector(".modal"),
          modalBtns = document.querySelectorAll("[data-modal]"),
          modalClose = document.querySelector("[data-close]");

    function hideModal() {
        modal.classList.toggle("hide");
        document.documentElement.style.overflow = "";
    }

    function openModal() {
        modal.classList.toggle("hide");
        document.documentElement.style.overflow = "hidden";

        // Если пользователь уже открывал модалку, то очищаем таймер
        clearTimeout(modalTimer);
    }

    modalBtns.forEach(btn => {
        btn.addEventListener("click", openModal);
    });

    modalClose.addEventListener("click", hideModal);

    modal.addEventListener("click", (e) => {
         if (e.target === modal) hideModal(modal);
    });

    document.addEventListener('keydown', (e) => {
         if (e.code === "Escape") modal.classList.add("hide");
    });

    //! Modified Modal Window -----------
    //* 1
    // const modalTimer = setTimeout(openModal, 5000);

    //* 2
    function showModalByScroll() {
        // Если прокрученная часть по Y и высота клиентского окна больше или равно обшей высоте документа
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }
    window.addEventListener("scroll", showModalByScroll);


    //! Create cards with classes -----------

    class MenuItem {
        constructor(src, alt, title, description, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.transfer = 59;
            // родитель, в которого воткнём карточку
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;

            // Вызов при создании экземпляра
            this.changeToRub();
        }

        // Этот метод будет переводить доллары в рубли (храним цены в долларах)
        changeToRub() {
            this.price *= this.transfer;
        }

        render() {
            // Инициализируем блок с карточкой
            const element = document.createElement("div");

            if (this.classes.length === 0) {
                this.element = "menu__item";
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            // Копируем вёрстку карточки с сайта
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;
            // Добавляем карточку на сайт к родителю
            this.parent.append(element);
        }
    }

    new MenuItem(
        "img/tabs/vegy.jpg",
        "vegy",
        "Меню \"Фитнес\"",
        "Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
        5,
        ".menu .container",
        "menu__item"
    ).render();

    new MenuItem(
        "img/tabs/elite.jpg",
        "elite",
        "Меню “Премиум”",
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        10,
        ".menu .container",
        "menu__item"
    ).render();

    new MenuItem(
        "img/tabs/post.jpg",
        "post",
        "Меню \"Постное\"",
        "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
        8,
        ".menu .container",
        "menu__item"
    ).render();
});
$(document).ready(function () {

    //функция добавления товара в корзину
    function addCart(add) {
        var block = add.parents(".block"); //ищем родителя блока
        var searchBlockText = block.find('.dataText');//
        if ((block).hasClass("notActive")) //если блок неактивен
            return; //завершаем работу
        block.toggleClass('choose'); //иначе добавляем ему класс
        var dataText = block.find('[data-text]').attr('data-text');
        var existingText = block.find('.dataText').text();

        //замена текста в шапке карточки
        function change() {
            searchBlockText
                .toggleClass("question")
                .text(dataText)
                .attr('data-text', existingText);
        }

        //поменять текст если пользователь убрал курсор
        block.on("mouseleave", function () {
            if (((block).hasClass("choose")) && (!(searchBlockText.hasClass("question")))) {
                change();
            }
        });

        //обратно поменять текст при повторном клике
        if ((!((block).hasClass("choose"))) && (searchBlockText.hasClass("question"))) {
            change();
        }
    }

    //вызов функции добавления товара в корзину при клике на карточку
    $(function () {
        $('.blockCart').click(function () {
            addCart($(this));
        });
    });
    //вызов функции добавления товара при клике на кнопку
    $(function () {
        $('.basketAdd__link').click(function () {
            addCart($(this));
        });
    });
    //функция для неактивного блока
    $(".block").each(function () {
        if ($(this).hasClass("notActive")) {  //если блок неактивен
            var filling = $(this).find('.subsidiary').text();
            $(this).find('.disabled').html("Печалька, " + filling + " закончился.");
        }
    });
});


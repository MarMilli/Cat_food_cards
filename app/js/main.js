$(document).ready(function () {


    //функция добавления товара в корзину
    function addCart(add){
        var block = add.parents(".block"); //ищем родителя блока
        if ((block).hasClass("notActive") ) //если блок неактивен
            return; //завершаем работу
        block.toggleClass('choose'); //иначе добавляем ему класс

    }
    //вызов функции добавления товара в корзину при клике на карточку
    $(function(){
        $('.blockCart').click(function(){
            addCart($(this));
        });
    });
    //вызов функции добавления товара при клике на кнопку
    $(function(){
        $('.basketAdd__link').click(function(){
            addCart($(this));
        });
    });


    $(".block").each(function () {

        if ($(this).hasClass("notActive")) {  //если блок неактивен
            var filling = $(this).find('.subsidiary').text();
            $(this).find('.disabled').html("Печалька, " + filling + " закончился.");
        }
    });
});


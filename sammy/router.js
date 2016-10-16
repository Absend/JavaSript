(function ($) {

    var app = $.sammy('#main', function () {

        this.get('#/', function (context) {

            this.load('data.json')
                .then(function (man) {
                    $.each(man, function (i, item) {
                        context.log(item.name, '-', item.age);
                    });
                });

        });
    });

    $(function () {
        app.run('#/');
    });

})(jQuery);

$(document).ready(function() {


});

selectCurrentWeek = function() {
    window.setTimeout(function() {
        $('.week-picker').find('.ui-datepicker-current-day a').addClass('ui-state-active');
    }, 1);

};
$(function() {
    // The style function
    $.fn.style = function(styleName, value, priority) {
        // DOM node
        var node = this.get(0);
        // Ensure we have a DOM node
        if (typeof node == 'undefined') {
            return this;
        }
        // CSSStyleDeclaration
        var style = this.get(0).style;
        // Getter/Setter
        if (typeof styleName != 'undefined') {
            if (typeof value != 'undefined') {
                // Set style property
                priority = typeof priority != 'undefined' ? priority : '';
                style.setProperty(styleName, value, priority);
                return this;
            } else {
                // Get style property
                return style.getPropertyValue(styleName);
            }
        } else {
            // Get CSSStyleDeclaration
            return style;
        }
    };


    $.extend($.datepicker, {

        // Reference the orignal function so we can override it and call it later
        _inlineDatepicker2: $.datepicker._inlineDatepicker,

        // Override the _inlineDatepicker method
        _inlineDatepicker: function(target, inst) {

            // Call the original
            this._inlineDatepicker2(target, inst);

            var beforeShow = $.datepicker._get(inst, 'beforeShow');

            if (beforeShow) {
                beforeShow.apply(target, [target, inst]);
            }
        }
    });
    weekTemp = {};

    $(".inlinedate").each(function () {
        $(this).datepicker({

            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: "W",
            firstDay: 1,
            inline: true,
            /* format:
              {
                  toDisplay: function (date, format, language) {
                      var d = new Date(date);
                      d.setDate(d.getDate() - 7);
                      return d.toISOString();
                  },
                  toValue: function (date, format, language) {
                      var d = new Date(date);
                      d.setDate(d.getDate() + 7);
                      return new Date(d);
                  }
              },*/

            dateFormat: 'yy-mm-dd',

            //showWeek: true,
            beforeShow:

                function(input, inst) {


                dat_week = $('.ui-state-active').parent().parent();
                dat_week.css('background-color', '#eceff5').addClass('highlight');
                var alllweek = $('.ui-state-active').parents('tr').addClass('highlight');

                // dat_week.prevAll('tr').css('background-color', '#f00');

                // alert(dat_week.html());
                // $(".ui-datepicker-calendar a").css("background-color", "white");

                // console.log(arguments);

                var d = new Date();
                datew = d;
                mon = weekDay(1, '', inst, datew);
                tue = weekDay(2, '', inst, datew);
                wed = weekDay(3, '', inst, datew);
                thu = weekDay(4, '', inst, datew);
                fri = weekDay(5, '', inst, datew);
                sat = weekDay(6, '', inst, datew);
                sunday = weekDay(7, '', inst, datew);

                trueyear = sunday.split('-');
                trueyear = trueyear[0];

                monthmon = dateTraslate(mon);
                truemon = daymon(mon);
                monthsun = dateTraslate(sunday);
                truesun = daysun(sunday);
                if (monthmon == monthsun) {
                    $('.ui-datepicker-title').text(truemon + ' - ' + truesun + ' ' + monthsun + ' ' + trueyear);
                } else {
                    $('.ui-datepicker-title').text(truemon + ' ' + monthmon + ' - ' + truesun + ' ' + monthsun + ' ' + trueyear);
                }

                nameweek = dateTraslate(mon);
                nameweek = nameweek.substr(0, 3);
                dayweek = daydaymon(mon);
                $('thead .mon').text(dayweek + ' ' + nameweek);

                nameweek = dateTraslate(tue);
                nameweek = nameweek.substr(0, 3);
                dayweek = daydaymon(tue);
                $('thead .tue').text(dayweek + ' ' + nameweek);

                nameweek = dateTraslate(wed);
                nameweek = nameweek.substr(0, 3);
                dayweek = daydaymon(wed);
                $('thead .wed').text(dayweek + ' ' + nameweek);

                nameweek = dateTraslate(thu);
                nameweek = nameweek.substr(0, 3);
                dayweek = daydaymon(thu);
                $('thead .thu').text(dayweek + ' ' + nameweek);

                nameweek = dateTraslate(fri);
                nameweek = nameweek.substr(0, 3);
                dayweek = daydaymon(fri);
                $('thead .fri').text(dayweek + ' ' + nameweek);

                nameweek = dateTraslate(sat);
                nameweek = nameweek.substr(0, 3);
                dayweek = daydaymon(sat);
                $('thead .sat').text(dayweek + ' ' + nameweek);

                nameweek = dateTraslate(sunday);
                nameweek = nameweek.substr(0, 3);
                dayweek = daydaymon(sunday);
                $('thead .sun').text(dayweek + ' ' + nameweek);

                var index = d.getDay();
                if (index == 0) {
                    d.setDate(d.getDate() - 6);
                } else if (index == 1) {
                    d.setDate(d.getDate());
                } else if (index != 1 && index > 0) {
                    d.setDate(d.getDate() - (index - 1));
                }

                weekTemp.mon = new Date(d);
                weekTemp.tue = new Date(d.setDate(d.getDate() + 1));
                weekTemp.wen = new Date(d.setDate(d.getDate() + 1));
                weekTemp.thu = new Date(d.setDate(d.getDate() + 1));
                weekTemp.fri = new Date(d.setDate(d.getDate() + 1));
                weekTemp.sat = new Date(d.setDate(d.getDate() + 1));
                weekTemp.sun = new Date(d.setDate(d.getDate() + 1));

                $('#mon').html(weekTemp.mon.getDate());
                $('#tue').html(weekTemp.tue.getDate());
                $('#wen').html(weekTemp.wen.getDate());
                $('#thu').html(weekTemp.thu.getDate());
                $('#fri').html(weekTemp.fri.getDate());
                $('#sat').html(weekTemp.sat.getDate());
                $('#sun').html(weekTemp.sun.getDate());
                return false;
            },
            onSelect:
            // var classes = getDateClasses($(this).datepicker('getDate'));
            // alert(classes).html();

                function(dateText, inst) {

                var date = $(this).datepicker('getDate');
                datew = date;
                mon = weekDay(1, dateText, inst, datew);
                tue = weekDay(2, dateText, inst, datew);
                wed = weekDay(3, dateText, inst, datew);
                thu = weekDay(4, dateText, inst, datew);
                fri = weekDay(5, dateText, inst, datew);
                sat = weekDay(6, dateText, inst, datew);
                sunday = weekDay(7, dateText, inst, datew);

                trueyear = sunday.split('-');
                trueyear = trueyear[0];


                monthmon = dateTraslate(mon);
                truemon = daymon(mon);
                monthsun = dateTraslate(sunday);
                truesun = daysun(sunday);

            }
        });
    });


    // $('.inlinedate .ui-datepicker-calendar tr').on('mouseover', function() { $(this).addClass('highlight'); });
    // $('.inlinedate .ui-datepicker-calendar tr').on('mouseleave', function() { $(this).removeClass('highlight'); });


});

$(document).ready(function() {

});

function weekDay(number, dateText, inst, date) {
    startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + number);
    var dateFormat = inst.settings.dateFormat || $.datepicker._defaults.dateFormat;
    dayw = $.datepicker.formatDate(dateFormat, startDate, inst.settings);
    return dayw;
}
// alert(date);
function daymon(d) {
    arrdate = d.split('-');
    if (arrdate[2].charAt(0) == '0') {
        truemon = arrdate[2].slice(1);
    } else {
        truemon = arrdate[2];
    }
    return truemon;
}

function daydaymon(d) {
    arrdate = d.split('-');
    truemon = arrdate[2];
    return truemon;
}

function daysun(d) {
    arrdate = d.split('-');
    if (arrdate[2].charAt(0) == '0') {
        truesun = arrdate[2].slice(1);
    } else {
        truesun = arrdate[2];
    }
    return truesun;
}

function dateTraslate(d) {
    arrdate = d.split('-');
    var mo = '';
    if (arrdate[1] == '01') {
        mo = 'Января';
    } else if (arrdate[1] == '02') {
        mo = 'Февраля';
    } else if (arrdate[1] == '03') {
        mo = 'Марта';
    } else if (arrdate[1] == '04') {
        mo = 'Апреля';
    } else if (arrdate[1] == '05') {
        mo = 'Мая';
    } else if (arrdate[1] == '06') {
        mo = 'Июня';
    } else if (arrdate[1] == '07') {
        mo = 'Июля';
    } else if (arrdate[1] == '08') {
        mo = 'Августа';
    } else if (arrdate[1] == '09') {
        mo = 'Сентября';
    } else if (arrdate[1] == '10') {
        mo = 'Октября';
    } else if (arrdate[1] == '11') {
        mo = 'Ноября';
    } else if (arrdate[1] == '12') {
        mo = 'Декабря';
    }
    return mo;

}


$('.days').on('click', function(e){
    $(this).parents('.tempTable').find('td').removeClass('pickedDate');
    $(this).parents('.tempTable').find('td').removeClass('pickedDateVisual');
    $(this).parents('.tempTable').find('th').removeClass('pickedDateVisual');
    var that = $(this),
        dayClass = that.attr("class");
        dayClass = dayClass.split(' ');
    if(that.text() != ''){
        that.addClass('pickedDate');
        that.parents('.table').find('tr').eq(0).find('.'+dayClass[0]).addClass('pickedDateVisual');
        that.parents('.table').find('tr').eq(1).find('.'+dayClass[0]).addClass('pickedDateVisual');
    }
});
$('.days').hover(function(){

	$(this).parents('.tempTable').find('td').removeClass('pickedDateVisual-hover');
	$(this).parents('.tempTable').find('th').removeClass('pickedDateVisual-hover');
	var that = $(this),
		dayClass = that.attr("class");
		dayClass = dayClass.split(' ');
    // console.log(dayClass);
	if(that.text() != ''){
		that.parents('.table').find('tr').eq(0).find('.'+dayClass[0]).addClass('pickedDateVisual-hover');
		that.parents('.table').find('tr').eq(1).find('.'+dayClass[0]).addClass('pickedDateVisual-hover');
	}
}, function () {
    $(this).parents('.tempTable').find('td').removeClass('pickedDateVisual-hover');
    $(this).parents('.tempTable').find('th').removeClass('pickedDateVisual-hover');
    var that = $(this),
        dayClass = that.attr("class");
        dayClass = dayClass.split(' ');
    // console.log(dayClass);
    if(that.text() != ''){
        that.parents('.table').find('tr').eq(0).find('.'+dayClass[0]).addClass('pickedDateVisual-hover');
        that.parents('.table').find('tr').eq(1).find('.'+dayClass[0]).addClass('pickedDateVisual-hover');
    }
});


$('.selectordrop ul li a').click(function(){
	var that = $(this);

	a = that.text();
	img_attr = that.parent().find('img').attr('src');
	$('.drop_result').find('img').attr('src',img_attr);
	$('.downtext').text(a);
	$('.selectordrop').removeClass(open);
	return false;

});

$("#user-phone").mask("+7(999) 999-9999");

$('.skill-items .btn').hover(
    function(){
    	$(this).parent().find('img').attr('src','images/logo-junior.jpg');
       	$(this).addClass('hover')},
    function(){
    	$(this).parent().find('img').attr('src','images/logo-senior.jpg');
    	$(this).removeClass('hover');
});


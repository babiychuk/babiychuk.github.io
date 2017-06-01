var form = angular.module("blogModule", []);

form.controller("contentCtrl", function ($scope) {

    $scope.contacts = "Libraries/contacts.html";

    $scope.url = $scope.contacts;

    $scope.contactsPage = function () {
        $scope.url = $scope.contacts;
    };
});

form.controller("blogCtrl", function ($scope) {

    $scope.nameGroup = ["admin", "user", "guest"];

    $scope.model = [
        {
            name: "Ivan",
            surname: "Pupkin",
            age: '47',
            group: 'user',
            description: 'Life coffe',
            note: '',
            checkbox: ''
        },
        {
            name: "Vasul",
            surname: "Pupkin",
            age: '42',
            group: 'admin',
            description: 'Life coffe',
            note: '',
            checkbox: ''
        },
        {
            name: "Bill",
            surname: "Gates",
            age: '57',
            group: 'user',
            description: 'Life coffe',
            note: '',
            checkbox: ''
        },
        {
            name: "Ivan",
            surname: "Ivanov",
            age: '21',
            group: 'user',
            description: 'Life coffe',
            note: '',
            checkbox: ''
        }
    ];

    $scope.apply = function (task) {
        if (
            angular.isDefined(task.name) &&
            angular.isDefined(task.surname)) {
            $scope.model.unshift({
                name: task.name,
                surname: task.surname,
                age: task.age,
                group: task.group,
                description: task.description,
                note: task.note
            });
        }


        $('.tdCheckbox').css('display', 'none');

    };

    var createForm = document.getElementById("createForm");
    var attentionWindow = document.getElementById("attentionWindow");

    $scope.close = function () {
        createForm.style.visibility = "hidden";
        attentionWindow.style.visibility = "hidden";
    };

    $scope.createForm = function () {
        if (createForm.style.visibility == "visible") {
            createForm.style.visibility = "hidden";
        } else {
            createForm.style.visibility = "visible ";
        }
    };

    $scope.delete = function () {

        if (attentionWindow.style.visibility == "visible") {
            attentionWindow.style.visibility = "hidden";
        } else {
            attentionWindow.style.visibility = "visible ";
        }


    };

    $scope.select = function () {

        if ($('.tdCheckbox').css('display', 'none')) {
            $('.tdCheckbox').css('display', 'block');
        }

        var Òheckbox—ount = function () {
            var n = $("input:checked").length;
            $("#colCheck").text('(' + n + ')');
        };
        Òheckbox—ount();

        $("input[type=checkbox]").on("click", Òheckbox—ount);

    };

    $scope.selectRow = function () {

        setTimeout(function () {
            var dataRow;
            $("#hoverTable .dataRow").click(function () {
                $(this).addClass('selectRow').siblings().removeClass('selectRow');
                dataRow = $(this).html();
            });


            var ch = $("#hoverTable tr.selectRow").children();

            var inp1 = $(ch[0]).text();
            var inp2 = $(ch[1]).text();
            var inp3 = $(ch[2]).text();
            var inp4 = $(ch[3]).text();
            var inp5 = $(ch[4]).text();
            var inp6 = $(ch[5]).text();

            var insertHtmlNameSurname = "" + inp1 + '&nbsp;' + inp2 + "";

            var insertHtml = '<table><tr><td>age:&nbsp;</td><td>' + inp3 + '</td></tr><tr><td>group:&nbsp;</td><td>' + inp4 + '</td></tr><tr><td>description:&nbsp;</td><td>' + inp5 + '</td></tr><tr><td>note:&nbsp;</td><td>' + inp6 + '</td></tr></table>';

            $('#ns').html(insertHtmlNameSurname);
            $('#info').html(insertHtml);


        }, 100);

    };


    $scope.deleteContacts = function () {


    console.log($('td input:checked').parents('tr').children());
    $('td input:checked').parents('tr').remove();

    $('.tdCheckbox').css('display', 'none');
    $("#hoverTable tr.selectRow").remove();
        attentionWindow.style.visibility = "hidden";

    }

        $scope.cancelDetete = function(){

            attentionWindow.style.visibility = "hidden";
    };


});







function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {lat: 48.368795, lng: 26.372681},
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });
    markerwater(map);
    markersun(map);
    markerbio(map);
    markerwind(map);
}



function markerwater(map){

    var markers = [];
    var enegrypos = [
        ['Івано-Фпанківськ', 48.921343, 24.710312],
        ['Львів', 49.833941, 24.022980],
        ['Хмельницький', 49.421192, 26.978302],
        ['Харьков', 50.012814, 36.227417],
        ['Запоріжжя', 47.847957, 35.139771],
        ['Донецьк', 48.024606, 37.809448],
        ['Рівне', 50.616142, 26.251831],
        ['Чернівці', 48.295757, 25.933228],
        ['Миколаїв', 46.970648, 31.997681],
        ['Полтава', 49.594467, 34.557495],
        ['Київ', 50.462531, 30.514526],
        ['Кременчуг', 49.079038, 33.403931],
        ['Черкаси', 49.458975, 32.041626]


    ];

    var image = {
        url: 'img/marker_water.png'
    };

    for (var i = 0; i < enegrypos.length; i++) {


        (function () {
            var energy = enegrypos[i];
           var marker = new google.maps.Marker({
                position: {lat: energy[1], lng: energy[2]},
                map: map,
                icon: image,
                animation: google.maps.Animation.DROP,
                title: energy[0],
                zIndex: energy[3]
            });

            markers.push(marker);

            animationMarkes(marker);

            var contentString = '<div id="info_marker">' +
                '<div id="info_head">' +
                '</div>' +
                '<div id="bodyContent">' +
                '<p><b>Ви</b> вибрали один з енергетичних обєктів, що розташований на території України та знаходиться у місті ' +
                '<b>' + energy[0] +
                '<hr align="center" width="290" size="1" color="#C4DAE1" />' +
                '</p>' +
                '<table id="table">' +
                '<tr>' +
                '<td><b>Назва станції</b>'+'</td>' +
                '<td><b>Вид джерела енергії</b>'+'</td>'+
                '<td><b>Потужність об’єкт електроенергетики</b>'+'</td>'+
                '</tr>' +
                '<tr>' +
                '<td>Більче-Золотецька ГЕС '+'</td>' +
                '<td>Енергія води '+'</td>'+
                '<td>0,149 МВт'+'</td>'+
                '</tr>' +
                '</table>' +
                '<hr align="center" width="290" size="1" color="#C4DAE1" />' +
                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            function animationMarkes(marker) {

                marker.addListener('click', function () {

                    if (marker.getAnimation() !== null) {
                        marker.setAnimation(null);
                        infowindow.close();
                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                        infowindow.open(map, marker);
                        setTimeout(function() {
                            infowindow.close();
                            marker.setAnimation(null);
                        }, 5900);
                        map.setCenter(marker.getPosition());
                    }
                });
            }
        }());

        var list = document.getElementById("list_head");

        var combobox = document.getElementById("combobox");

        list.addEventListener("click", function () {
            if (combobox.style.visibility == "visible") {
                combobox.style.visibility = "hidden";
                combobox.innerHTML = ""
            } else {

                combobox.style.visibility = "visible";

                //добавление списка городов через масив
                for (var c = 0; c < enegrypos.length; c++) {
                    combobox.innerHTML += "<div>" + enegrypos[c][0];
                }
                var child = combobox.childNodes;

                for (var d = 0; d < child.length; d++) {

                    (function () {
                        var index = d;
                        child[d].addEventListener("click", function () {
                            text_list.innerHTML = enegrypos[index][0];
                            map.setCenter({lat: enegrypos[index][1], lng: enegrypos[index][2]});
                            map.setZoom(13);
                            unzoom.style.visibility = "visible";
                        });
                    }());
                }
            }
        });
    }


    var unzoom = document.getElementById("unzoom");

    unzoom.addEventListener("click", function () {
        var unzoomPos = {lat: 48.368795, lng: 26.372681};
        map.setCenter(unzoomPos);
        map.setZoom(6);
        unzoom.style.visibility = "hidden";
        text_list.innerHTML = 'Місто...';
    });


    var checkWater = document.getElementById('checkWater');
    var info_head_water_left = document.getElementById("info_head_water_left");

    $('.skin-flat-water input').iCheck({
        checkboxClass: 'icheckbox_flat-blue'
    }).on('ifToggled', function(){

        if(checkWater.checked){
            setMapOnAllmarkersWater(map);
            info_head_water_left.style.backgroundImage = "url('img/waterStation_left.png')";
        } else {
            setMapOnAllmarkersWater(null);

            info_head_water_left.style.backgroundImage = "url('img/waterStation_left_opp.png')";
        }
    } );

    function setMapOnAllmarkersWater(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }


}

function markersun(map) {
    var markersSun = [];
    var arrSun = [
        ['Тернопіль', 49.566976, 25.606384],
        ['Ковель', 51.225593, 24.702759],
        ['Сарни', 51.342409, 26.603394],
        ['Коростень', 50.956480, 28.657837],
        ['Мукачево', 48.470873, 22.703247],
        ['Луганськ', 48.580014, 39.292603],
        ['Маріуполь', 47.097941, 37.534790],
        ['Євпаторія', 45.195345, 33.359985],
        ['Сімферополь', 44.962612, 34.118042],
        ['Алупка', 44.423728, 34.041138]
    ];



    var image = {
        url: 'img/marker_sun.png'
    };

    for (var i = 0; i < arrSun.length; i++) {

        (function () {
            var energySun = arrSun[i];
            var markerSun = new google.maps.Marker({
                position: {lat: energySun[1], lng: energySun[2]},
                map: map,
                icon: image,
                animation: google.maps.Animation.DROP,
                title: energySun[0]
            });
            markersSun.push(markerSun);

            animationMarkes(markerSun);

            var contentString = '<div id="info_marker">' +
                '<div id="info_head">' +
                '</div>' +
                '<div id="bodyContent">' +
                '<p><b>Ви</b> вибрали один з енергетичних обєктів, що розташований на території України та знаходиться у місті ' +
                '<b>' + energySun[0] +
                '<hr align="center" width="290" size="1" color="#C4DAE1" />' +
                '</p>' +
                '<table id="table">' +
                '<tr>' +
                '<td><b>Назва станції</b>'+'</td>' +
                '<td><b>Вид джерела енергії</b>'+'</td>'+
                '<td><b>Потужність об’єкт електроенергетики</b>'+'</td>'+
                '</tr>' +
                '<tr>' +
                '<td>Більче-Золотецька ГЕС '+'</td>' +
                '<td>Енергія води '+'</td>'+
                '<td>0,149 МВт'+'</td>'+
                '</tr>' +
                '</table>' +
                '<hr align="center" width="290" size="1" color="#C4DAE1" />' +
                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            function animationMarkes(markerSun) {

                markerSun.addListener('click', function () {

                    if (markerSun.getAnimation() !== null) {
                        markerSun.setAnimation(null);
                        infowindow.close();
                    } else {
                        markerSun.setAnimation(google.maps.Animation.BOUNCE);
                        infowindow.open(map, markerSun);
                        setTimeout(function() {
                            infowindow.close();
                            markerSun.setAnimation(null);
                        }, 5900);
                        map.setCenter(markerSun.getPosition());
                    }
                });
            }
        }());
    }

    var checkSun = document.getElementById('checkSun');
    var info_head_sun_left = document.getElementById("info_head_sun_left");

    $('.skin-flat-sun input').iCheck({
        checkboxClass: 'icheckbox_flat-orange'
    }).on('ifToggled', function(){

        if(checkSun.checked){
            setMapOnAllmarkersSun(map);
            info_head_sun_left.style.backgroundImage = "url('img/sunStation_left.png')";
        } else {
            setMapOnAllmarkersSun(null);
            info_head_sun_left.style.backgroundImage = "url('img/sunStation_left_opp.png')";
        }
    } );

    function setMapOnAllmarkersSun(map) {
        for (var i = 0; i < markersSun.length; i++) {
            markersSun[i].setMap(map);
        }
    }


}

function markerbio(map) {
    var markersBio = [];
    var arrBio = [
        ['Чернігів', 51.586883, 31.431885],
        ['Волошновка', 50.607210, 33.123779],
        ['Полонне', 50.130703, 27.564697],
        ['Ясна Поляна', 46.388149, 34.090576],
        ['Суми', 50.914939, 34.788208],
        ['Кривой Рог', 47.914271, 33.381958],
        ['Кировоград', 48.529111, 32.261353],
        ['Умань', 48.780514, 30.220642],
        ['Могилев-Подольський', 48.460970, 27.798157],
        ['Коломия', 48.521835, 25.032349]
    ];



    var image = {
        url: 'img/marker_bio.png'
    };

    for (var i = 0; i < arrBio.length; i++) {

        (function () {
            var energyBio = arrBio[i];
            var markerBio = new google.maps.Marker({
                position: {lat: energyBio[1], lng: energyBio[2]},
                map: map,
                icon: image,
                animation: google.maps.Animation.DROP,
                title: energyBio[0]
            });
            markersBio.push(markerBio);

            animationMarkes(markerBio);

            var contentString = '<div id="info_marker">' +
                '<div id="info_head">' +
                '</div>' +
                '<div id="bodyContent">' +
                '<p><b>Ви</b> вибрали один з енергетичних обєктів, що розташований на території України та знаходиться у місті ' +
                '<b>' + energyBio[0] +
                '<hr align="center" width="290" size="1" color="#C4DAE1" />' +
                '</p>' +
                '<table id="table">' +
                '<tr>' +
                '<td><b>Назва станції</b>'+'</td>' +
                '<td><b>Вид джерела енергії</b>'+'</td>'+
                '<td><b>Потужність об’єкт електроенергетики</b>'+'</td>'+
                '</tr>' +
                '<tr>' +
                '<td>Більче-Золотецька ГЕС '+'</td>' +
                '<td>Енергія води '+'</td>'+
                '<td>0,149 МВт'+'</td>'+
                '</tr>' +
                '</table>' +
                '<hr align="center" width="290" size="1" color="#C4DAE1" />' +
                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            function animationMarkes(markerBio) {

                markerBio.addListener('click', function () {

                    if (markerBio.getAnimation() !== null) {
                        markerBio.setAnimation(null);
                        infowindow.close();
                    } else {
                        markerBio.setAnimation(google.maps.Animation.BOUNCE);
                        infowindow.open(map, markerBio);
                        setTimeout(function() {
                            infowindow.close();
                            markerBio.setAnimation(null);
                        }, 5900);
                        map.setCenter(markerBio.getPosition());
                    }
                });
            }
        }());

    }
    var checkBio = document.getElementById('checkBio');
    var info_head_bio_left = document.getElementById("info_head_bio_left");


    $('.skin-flat-bio input').iCheck({
        checkboxClass: 'icheckbox_flat-green'
    }).on('ifToggled', function(){

        if(checkBio.checked){
            setMapOnAllmarkersBio(map);
            info_head_bio_left.style.backgroundImage = "url('img/bioStation_left.png')";
        } else {
            setMapOnAllmarkersBio(null);
            info_head_bio_left.style.backgroundImage = "url('img/bioStation_left_opp.png')";
        }
    } );

    function setMapOnAllmarkersBio(map) {
        for (var i = 0; i < markersBio.length; i++) {
            markersBio[i].setMap(map);
        }
    }


}

function markerwind(map) {
    var markersWind = [];
    var arrWind = [
        ['Волошкове', 49.004997, 29.520264],
        ['Лукашевка', 48.176618, 30.706787],
        ['Литвиновка', 49.220737, 30.069580],
        ['Одеса', 46.494138, 30.684814],
        ['Комаргородськ', 48.556160, 28.641357],
        ['Житомир', 50.280345, 28.657837],
        ['Вінниця', 49.244276, 28.471069],
        ['Ананьєв', 47.711090, 29.966583],
        ['Івановка', 46.977851, 30.471954],
        ['Изюм', 49.237103, 37.260132]
    ];
    var image = {
        url: 'img/marker_wind.png'
    };

    for (var i = 0; i < arrWind.length; i++) {

        (function () {
            var energyWind = arrWind[i];
            var markerWind = new google.maps.Marker({
                position: {lat: energyWind[1], lng: energyWind[2]},
                map: map,
                icon: image,
                animation: google.maps.Animation.DROP,
                title: energyWind[0]
            });
            markersWind.push(markerWind);

            animationMarkes(markerWind);

            var contentString = '<div id="info_marker">' +
                '<div id="info_head">' +
                '</div>' +
                '<div id="bodyContent">' +
                '<p><b>Ви</b> вибрали один з енергетичних обєктів, що розташований на території України та знаходиться у місті ' +
                '<b>' + energyWind[0] +
                '<hr align="center" width="290" size="1" color="#C4DAE1" />' +
                '</p>' +
                '<table id="table">' +
                '<tr>' +
                '<td><b>Назва станції</b>'+'</td>' +
                '<td><b>Вид джерела енергії</b>'+'</td>'+
                '<td><b>Потужність об’єкт електроенергетики</b>'+'</td>'+
                '</tr>' +
                '<tr>' +
                '<td>Більче-Золотецька ГЕС '+'</td>' +
                '<td>Енергія води '+'</td>'+
                '<td>0,149 МВт'+'</td>'+
                '</tr>' +
                '</table>' +
                '<hr align="center" width="290" size="1" color="#C4DAE1" />' +
                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            function animationMarkes(markerWind) {

                markerWind.addListener('click', function () {

                    if (markerWind.getAnimation() !== null) {
                        markerWind.setAnimation(null);
                        infowindow.close();
                    } else {
                        markerWind.setAnimation(google.maps.Animation.BOUNCE);
                        infowindow.open(map, markerWind);
                        setTimeout(function() {
                            infowindow.close();
                            markerWind.setAnimation(null);
                        }, 5900);
                        map.setCenter(markerWind.getPosition());
                    }
                });
            }
        }());

    }






    var checkWind = document.getElementById('checkWind');
    var info_head_wind_left = document.getElementById("info_head_wind_left");

    $('.skin-flat-wind input').iCheck({
        checkboxClass: 'icheckbox_flat-aero'
    }).on('ifToggled', function(){

        if(checkWind.checked){
            setMapOnAllmarkersWind(map);
            info_head_wind_left.style.backgroundImage = "url('img/windStation_left.png')";
        } else {
            setMapOnAllmarkersWind(null);
            info_head_wind_left.style.backgroundImage = "url('img/windStation_left_opp.png')";
        }
    } );

    function setMapOnAllmarkersWind(map) {
        for (var i = 0; i < markersWind.length; i++) {
            markersWind[i].setMap(map);
        }
    }

}


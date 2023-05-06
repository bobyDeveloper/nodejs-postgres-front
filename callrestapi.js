var url = "https://api-videogames-service-bobydeveloper.cloud.okteto.net/api/videogames";

function postVideogames() {

    console.log(url);

    var myName = $('#name').val();
    var myCompany = $('#company').val();
    var myPrecio = $('#precio').val();
    var myCountry = $('#country').val();
    var myCalificacion = $('#calificacion').val();
    var myDispositivo = $('#dispositivo').val();
    var myDificultad = $('#dificultad').val();
    var myCategoria = $('#categoria').val();
    var myVersion = $('#version').val();
    var myLanzamiento = $('#lanzamiento').val();

    var myvideogame = {
        name: myName,
        company: myCompany,
        precio: myPrecio,
        country: myCountry,
        calificacion: myCalificacion,
        dispositivo: myDispositivo,
        dificultad: myDificultad,
        categoria: myCategoria,
        version: myVersion,
        lanzamiento: myLanzamiento
    };
    console.log(myvideogame);

    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        sucess: function (data) {
            console.log(data);
            $('#resultado').html(JSON.stringify(data.videogame));
        },
        data: JSON.stringify(myvideogame)
    });
}
function getVideogames() {
    console.log(url);

    $.getJSON(url,
        function(json) {
            console.log(json);

            var arrVideogames = json.videogames;

            var htmlTableVideogames = '<table border=1">';

            arrVideogames.forEach(function(item) {
                console.log(item);
                htmlTableVideogames +=   '<tr>' +
                                        '<td>' + item.id + '</td>' +
                                        '<td>' + item.name + '</td>' +
                                        '<td>' + item.company + '</td>' +
                                        '<td>' + item.precio + '</td>' +
                                        '<td>' + item.country + '</td>' +
                                        '<td>' + item.calificacion + '</td>' +
                                        '<td>' + item.dispositivo + '</td>' +
                                        '<td>' + item.dificultad + '</td>' +
                                        '<td>' + item.categoria + '</td>' +
                                        '<td>' + item.version + '</td>' +
                                        '<td><img src="' + item.fundation + '" width="100" height="70"></td>' +
                                    '</tr>'                                     
            });
            htmlTableVideogames += '</table>';

            $('#resultado').html(htmlTableVideogames);
        }
    );
}

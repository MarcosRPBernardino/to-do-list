$(document).ready(function() {

    $('form').on ('submit', function (e){
        e.preventDefault();
    });

    $('#adicionarTarefaB').click(function() {
    var listaTarefa = $('#novaTarefaIn').val();
    

    if ($('#novaTarefaIn').val().trim() !== '') {
        $('#tarefasUl').append('<li>' + listaTarefa + '</li>');
        $('#novaTarefaIn').val('');
    } else {
        alert('Tente Novamente!');
    }
})

$('#tarefasUl').on('click', 'li', function() {
    $(this).toggleClass('finalizado');
});

});
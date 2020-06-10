const salvarBanco = document.getElementById('texto');
const salvarBtn = document.getElementById('salvar');

salvarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    db.ref('tutorialFirebase').push({
        texto: salvarBanco.value
    })
    //alert("Dados salvos com sucesso!");
})

firebase.database().ref('tutorialFirebase').on('value', function (snapshot) {
    list.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().texto));
        list.appendChild(li);
    });
});
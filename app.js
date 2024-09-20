const button = document.querySelector('button');
const addLoading = () => {
    button.innerHTML = '<img src="loading.png" alt="loading" class="loading"></img>';
}

const removeLoading = () => {
    button.innerHTML = "Submit";
}

//Procurar o form no codigo HTML

const handleSubmit = (event) => {

//Impede que a pagina do formulario recarregue

    event.preventDefault()

//Chama a funcao loading do botao "Submit"

    addLoading();

//Busca as informacoes no formulario HTML pelo "name"

const first_name = document.querySelector('input[name=first_name]').value;
const last_name = document.querySelector('input[name=last_name]').value;
const email = document.querySelector('input[name=email]').value;
const query = document.querySelector('input[name=query]').value;
const message = document.querySelector('textarea[name=message]').value;
const consent = document.querySelector('input[name=consent]').value;


//Busca dados da API criada pelo Sheetmonkey

fetch("https://api.sheetmonkey.io/form/mvdzMcmviHfPyEQmpvkgFV", {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    
    body: JSON.stringify ({first_name, last_name, email, query, message, consent })
} 

).then(() => removeLoading());
}

document.querySelector("form").addEventListener("submit", handleSubmit);

// Validação de Campos Obrigatórios utilizando Javascript Nativo

// Validação para o fomulário de Login.
function ValidarCamposLogin() {
    // alert("teste");

    if(document.formLogin.email.value == ""){
        alert("Preencher o campo obrigatório E-MAIL!");
        document.formLogin.email.focus();
        return false;
    }

    if(document.formLogin.senha.value == ""){
        alert("Preencher o campo obrigatório SENHA!");
        document.formLogin.senha.focus();
        return false;
    }


}

// Validação para o fomulário de Cadastro.
function ValidarCamposCadastro() {
    // alert("teste");
    if(document.formCadastro.nome.value == ""){
        alert("Preencha o campo obrigatório NOME!");
        document.formCadastro.nome.focus();
        return false;
    }

    if(document.formCadastro.email.value == ""){
        alert("Preencha o campo obrigatório E-MAIL!");
        document.formCadastro.email.focus();
        return false;
    }

    if(document.formCadastro.data.value == ""){
        alert("Preencha o campo obrigatório DATA DE NASCIMENTO!");
        document.formCadastro.data.focus();
        return false;
    }

    if(document.formCadastro.cpf.value == ""){
        alert("Preencha o campo obrigatório CPF!");
        document.formCadastro.cpf.focus();
        return false;
    }

    if(document.formCadastro.bairro.value == ""){
        alert("Preencha o campo obrigatório BAIRRO!");
        document.formCadastro.bairro.focus();
        return false;
    }

    if(document.formCadastro.rua.value == ""){
        alert("Preencha o campo obrigatório RUA!");
        document.formCadastro.rua.focus();
        return false;
    }

    if(document.formCadastro.numero.value == ""){
        alert("Preencha o campo obrigatório NÚMERO!");
        document.formCadastro.numero.focus();
        return false;
    }

    if(document.formCadastro.cep.value == ""){
        alert("Preencha o campo obrigatório CEP!");
        document.formCadastro.cep.focus();
        return false;
    }

    if(document.formCadastro.complemento.value == ""){
        alert("Preencha o campo obrigatório COMPLEMENTO!");
        document.formCadastro.complemento.focus();
        return false;
    }

    if(document.formCadastro.senha.value == ""){
        alert("Preencha o campo obrigatório SENHA!");
        document.formCadastro.senha.focus();
        return false;
    }
    if(document.formCadastro.repsenha.value == ""){
        alert("Preencha o campo obrigatório REPETIR SENHA!");
        document.formCadastro.repsenha.focus();
        return false;
    }
}
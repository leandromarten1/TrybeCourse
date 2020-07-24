function states(){
  let estadosBr = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
  let estados = document.querySelector('#festado');
  for (let i = 0; i < estadosBr.length; i += 1){  
    let optionTag = document.createElement('option');
    let item = document.createTextNode(estadosBr[i]);
    optionTag.value = estadosBr[i];
    optionTag.appendChild(item);
    estados.appendChild(optionTag);
    //console.log('arô');
  }
}

function validaForm(){
  if (fname.value == null || fname.value == ""){
    alert('Preencha o campo Nome');
    fname.focus();
    return false;
  }  
  let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  if(!email.test(femail.value)){   
    alert('Preencha o campo Email');
    femail.focus();
    return false;
  } 
  if (fcpf.value == null || fcpf.value.length !== 11){
    alert('Preencha o campo CPF');
    fcpf.focus();
    return false;
  }
  if(fend.value == null || fend.value == ""){
    alert('Preencha o campo Endereço');
    fend.focus();
    return false;
  }
  if(fcidade.value == null || fcidade.value == ""){
    alert('Preencha o campo Cidade');
    fcidade.focus();
    return false;
  }
  if(festado.value == null || festado.value == ""){
    alert('Selecione seu estado!');
    festado.focus();
    return false;
  }
  if(rescur.value == "" || rescur.value.length <= 2 ){
    alert('Você deve preencher um Resumo de seu curriculo');
    rescur.focus();
    return false;
  }
  if(fcargo.value == null || fcargo.value == ""){
    alert('Preencha seu cargo!');
    fcargo.focus();
    return false;
  }
  if(fdesc.value == null || fdesc.value == ""){
    alert('Necessária uma breve descrição do cargo');
    fdesc.focus();
    return false;
  }
  let data = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
  if (fdata.value == ""){
    alert('Preencha uma data!');
    fdata.focus();
    return false;
  }else if(!data.test(fdata.value)){
    alert('A data precisa estar no seguinte formato: dd/mm/aaaa');
    fdata.focus();
    return false;
  }
}

function showResults(){
  
  let content = document.createElement('div');
  let allInputs = document.querySelectorAll('.forjs'); 
  
  for(let i = 0; i < allInputs.length; i += 1){
    let field = document.createElement('h3');
    let result = document.createElement('p');
    field.innerHTML = allInputs[i].name;
    result.innerHTML = allInputs[i].value;
    content.appendChild(field);
    content.appendChild(result);    
  }
  document.body.appendChild(content); 
}

window.onload = function (){
  
  states();
  const btn = document.querySelector('#btn-form');
  btn.addEventListener('click', function(e){
    e.preventDefault();
    validaForm();
    showResults();
  });
  
}
// Precisa validar apenas 1 RADIO BUTTONS

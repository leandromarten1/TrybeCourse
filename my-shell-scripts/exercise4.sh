#!/bin/bash

# Exercício 4

    arquivo="/home/leandro/unix_tests/scripts/operadores.sh"
   # arquivo2=$(pwd) # diretório apenas.

    if [ -e $arquivo ]
    then    
        echo "O caminho $arquivo está habilitado!"
    fi
    if [ -w $arquivo ]
    then
        echo "Você tem permissão para editar $arquivo."
    else   
        echo "Você NÃO foi autorizado a editar $arquivo."
    fi
#!/bin/bash

# Exercicio 9


    argumento=$1
​
    if [ -d $argumento ]
    then
        quantidade=`ls -l $argumento | wc -l`
            echo "O argumento $argumento é um diretório e tem $quantidade arquivos."
    else
            echo "O argumento $argumento não é um diretório."
    fi
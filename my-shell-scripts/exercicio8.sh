#!/bin/bash

# Exercicio 8

    arquivos=$@

    for argumento in $arquivos
    do  
        if [ -f $argumento ]
            then                  
                resposta="arquivo"
            elif [ -d $argumento ]
            then                       
                resposta="diretório"
            else
                resposta="Outra coisa"
        fi
            echo "$argumento é $resposta"
        ls -l $argumento   
    done
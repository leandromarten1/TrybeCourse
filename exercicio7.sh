#!/bin/bash

# Exercício 7

# caminho=$1

        if [ -f "$caminho" ]
            then                  
                resposta="arquivo"
            elif [ -d "$caminho" ]
            then                       
                resposta="diretório"
            else
                resposta="Nada"
        fi
            echo "$caminho é $resposta"
            ls -l $caminho
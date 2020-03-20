#!/bin/bash

# Exercicio 6

    read -p "Escreva o nome de um arquivo ou diretório: " caminho

        if [ -f $caminho ]
            then                  
                echo "$caminho é apenas um arquivo comum."
            elif [ -d $caminho ]
            then                       
                 echo "$caminho é um diretório."
            else
                echo "Não é arquivo ou diretorio."
        fi
        ls -l $caminho
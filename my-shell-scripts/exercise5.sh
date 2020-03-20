#!/bin/bash

# Exercício 5

 palavras="shell script usando estrutura repetição for terminal"

    for palavra in $palavras # no palavra não se usa $ pois estamos criando uma nova variável, não chamando ela.
        do
            echo $palavra
        done 
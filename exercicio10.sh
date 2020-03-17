#!/bin/bash
# Eu sou Tryber e ... Estou aprendendo github

# Exercicio 10        

    data=$(date +%F)

    for arquivo in `ls *.png`
    do  
        mv $arquivo $data-$arquivo
    done

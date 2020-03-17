#!/bin/bash
# Eu sou Tryber E também vou ter muito sucesso na programação!


# Exercicio 10        

    data=$(date +%F)

    for arquivo in `ls *.png`
    do  
        mv $arquivo $data-$arquivo
    done

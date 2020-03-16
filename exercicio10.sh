#!/bin/bash


# Exercicio 10        

    data=$(date +%F)

    for arquivo in `ls *.png`
    do  
        mv $arquivo $data-$arquivo
    done

#!/bin/bash


# Exercicio 11

    diretorio=$1
    extensao=$2

    data=$(date +%F)
        cd $diretorio
        for arquivo in `ls *.$extensao`
        do  
            echo "O nome era: $arquivo e ficará $data-$arquivo"
            mv $arquivo $data-$arquivo
        done
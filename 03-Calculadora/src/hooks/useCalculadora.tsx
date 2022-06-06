import { useRef, useState } from 'react'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numero, setNumero] = useState('0')
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0')
        setNumeroAnterior('0')
    }

    const armarNumero = (numeroTexto: string) => {
        if (numeroTexto === '.' && numero.includes('.')) return

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)
            }
            else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)
            }
            else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)
            }
            else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            }
            else {
                setNumero(numero + numeroTexto)
            }
        }
        else {
            setNumero(numero + numeroTexto)
        }
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        }
        else {
            setNumero('-' + numero)
        }
    }

    const btnDel = () => {
        console.log(numero)
        let negativo = ''
        let numTemp = numero
        if (numero.includes('-')) {
            negativo = '-'
            numTemp = numero.substring(1)
        }
        if (numTemp.length > 1) {
            if (numTemp === 'Infinity' || numTemp === '-Infinity' || numTemp === 'NaN') {
                setNumero('0')
            }
            else {
                setNumero(negativo + numTemp.slice(0, -1))
            }
        }
        else {
            setNumero('0')
        }
    }

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1))
        }
        else {
            setNumeroAnterior(numero)
        }
        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.dividir
    }

    const btnSumar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.sumar
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar
    }

    const btnRestar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.restar
    }

    const calcular = () => {
        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break
            case Operadores.restar:
                setNumero(`${num2 - num1}`)
                break
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break
            case Operadores.dividir:
                setNumero(`${num2 / num1}`)
                break
        }
        setNumeroAnterior('0')
    }

    return {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        positivoNegativo,
        btnDel,
        btnDividir,
        btnSumar,
        btnMultiplicar,
        btnRestar,
        calcular
    }

}

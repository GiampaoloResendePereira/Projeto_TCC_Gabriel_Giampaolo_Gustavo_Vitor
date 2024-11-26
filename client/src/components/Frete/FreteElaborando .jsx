//usar o o caluclo do frete no repositorio lab e conecat com as telas atuais de calculko de frte
import React, { useState } from 'react';
import styles from './styles/SolicitacaoFrete.module.css'
import { useNavigate } from 'react-router-dom';

function FreteCalculo({ id, handleSubmit }) {

    //use state
    const [cepOrigem, setCepOrigem] = useState('');
    const [cepDestino, setCepDestino] = useState('');
    const [largura, setLargura] = useState('');
    const [altura, setAltura] = useState('');
    const [comprimento, setComprimento] = useState('');
    const [peso, setPeso] = useState('');

    const [errorCepOrigem, setErrorCepOrigem] = useState('');
    const [errorCepDestino, setErrorCepDestino] = useState('');
    const [errorPeso, setErrorPeso] = useState('');
    const [distancia, setDistancia] = useState(0);


    // Função para validar o formato do CEP
    const validarCep = (cep) => {
        const regexCep = /^[0-9]{5}-[0-9]{3}$/; // Validação de CEP no formato XXXXX-XXX
        return regexCep.test(cep);
    };

    // Função para validar o peso (número positivo)
    const validarPeso = (peso) => {
        const regexPeso = /^[0-9]+(\.[0-9]{1,2})?$/; // Valida números com até duas casas decimais
        return regexPeso.test(peso);
    };

    // Função para calcular o valor do frete com base no peso
    const calcularValorPeso = (peso) => {
        const pesoFloat = parseFloat(peso);
        for (let i = 0; i < tabelaPeso.length; i++) {
            if (pesoFloat <= tabelaPeso[i].limite) {
                return tabelaPeso[i].valor;
            }
        }
    };

    // Função para calcular o valor do frete por km rodado
    const calcularValorKm = (km) => {
        const precoPorKm = 0.50; // Preço base por km
        return km * precoPorKm;
    };

    // Função para calcular a distância entre dois pontos utilizando a API do Distance Matrix
    const calcularDistancia = async (cepOrigem, cepDestino) => {
        try {
            // Chave de API fornecida
            const key = 'fMPFKZjJhlioZjnswMy3YqzzYrorh30HfkeZuFT1Mwq93mtt9Q0KYPds8oEHIHYb';

            // Consultar a API DistanceMatrix para calcular a distância entre os pontos
            const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${cepOrigem}&destinations=${cepDestino}&key=${key}`;
            const response = await fetch(url);
            const data = await response.json();

            // Verificar se a resposta contém a distância e atualizar o estado
            if (data.status === 'OK') {
                const distanciaEmKm = data.rows[0].elements[0].distance.value / 1000; // A distância é retornada em metros
                setDistancia(distanciaEmKm);
            } else {
                alert('Erro ao calcular a distância entre os CEPs.');
            }
        } catch (error) {
            console.error('Erro ao calcular distância: ', error);
            alert('Erro ao calcular a distância entre os CEPs.');
        }
    };


    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();

        let isValid = true;
        setErrorCepOrigem('');
        setErrorCepDestino('');
        setErrorPeso('');

        // Validação do CEP de origem
        if (!validarCep(cepOrigem)) {
            setErrorCepOrigem('CEP de origem inválido. Formato correto: XXXXX-XXX');
            isValid = false;
        }

        // Validação do CEP de destino
        if (!validarCep(cepDestino)) {
            setErrorCepDestino('CEP de destino inválido. Formato correto: XXXXX-XXX');
            isValid = false;
        }

        // Validação do peso
        if (!validarPeso(peso)) {
            setErrorPeso('Peso inválido. Formato correto: um número positivo com até duas casas decimais.');
            isValid = false;
        }

        if (isValid) {
            // Calcular distância
            calcularDistancia(cepOrigem, cepDestino);

            // Calcular valor do frete
            const valorPeso = calcularValorPeso(peso);
            if (valorPeso === 'Não é possível transportar') {
                alert('Peso inválido para transporte.');
                setValorFrete(valorPeso);
                return;
            }

            const valorKm = calcularValorKm(distancia);
            const valorTotal = valorPeso === 'Não é possível transportar' ? valorPeso : valorPeso + valorKm;

            setValorFrete(valorTotal);
            alert('Cálculo do frete realizado com sucesso!');
        }
    };

    // Função para lidar com a solicitação do frete
    const handleSolicitarFrete = () => {
        alert('Frete solicitado com sucesso!');
    };

    function subimit(e) {
        e.preventDefalt();
    }

    return (
        <>
            <div>
                

            </div>
        </>
    );

}
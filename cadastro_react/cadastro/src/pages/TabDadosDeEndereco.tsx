import { useState } from "react";
import InputCep from "../componentes/InputCep";
import InputCidades from "../componentes/InputCidades";
import InputEstados from "../componentes/InputEstados";
import { CepContextProvider } from "../providers/CepContext";

export default function () {

    return <>
        <form className="container">
        <h1>Dados de endereço</h1>
            <CepContextProvider>
                <div className="containerDiv">
                    <label htmlFor="cep">CEP</label>
                    <InputCep />
                </div>
                <div className="containerDiv">
                    <label htmlFor="estado">Estado</label>
                    <InputEstados />
                </div>
                <div className="containerDiv">
                    <label htmlFor="cidade">Cidade</label>
                    <InputCidades />
                </div>
                <button className="containerBtn">Enviar</button>
            </CepContextProvider>
            
        </form>
    </>
}
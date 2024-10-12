import React from 'react'

function InfoAdicional() {
    return (
        <div>
            <h1>Informações Adicionais</h1>
            <h2>CEP</h2>
            <form action="">
            <label >Logradouro</label>
            <input/>
            <label for="numero" style="color: black;" >Número</label>
            <input  type="text" id="numero" name="numero" style="width: 100%; padding: 8px; margin: 5px 0; border: 1px solid #ccc; border-radius: 4px;" required />
            <label for="complemento" style="color: black;">Complemento</label>
            <input type="text" id="complemento" name="complemento" style="width: 100%; padding: 8px; margin: 5px 0; border: 1px solid #ccc; border-radius: 4px;" />
            <label htmlFor="">Nome do remetente</label>
            <input type="text" />
            <label htmlFor="">Celular</label>
            <input type="text" />
            <label htmlFor="">CPF ou CNPJ</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />

            <h2>CEP(destinatário)</h2>
            <label >Logradouro</label>
            <input type="text" />
            <label htmlFor="">Número</label>
            <input type="text" />
            <label htmlFor="">Complemento</label>
            <input type="text" />
            <label htmlFor="">Nome do remetente</label>
            <input type="text" />
            <label htmlFor="">Celular</label>
            <input type="text" />
            <label htmlFor="">CPF ou CNPJ</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />
            </form>
        </div>
      )
}
export default InfoAdicional;

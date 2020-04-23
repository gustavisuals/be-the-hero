import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg';


const NewIncident = () => {
  
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ value, setValue ]  =  useState('')

  const history = useHistory()

  const ongId = localStorage.getItem('ongId')
  
  //Função cadastrar Novo Caso
  const handleNewIncident = async (eventSubmit) => {
    eventSubmit.preventDefault()

    const data = {
      title,
      description,
      value,
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })
      history.push('/profile')
    }catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={ logoImg } alt="Be The Hero"/>
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói e resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>                    
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do caso"
            value={title}
            onChange={eventSubmit => setTitle(eventSubmit.target.value)}
          />

          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={eventSubmit => setDescription(eventSubmit.target.value)}
          />

          <input 
            placeholder="Valor em R$"
            value={value}
            onChange={eventSubmit => setValue(eventSubmit.target.value)}
          />

          <button className="button" type="submit"> Cadastrar </button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident
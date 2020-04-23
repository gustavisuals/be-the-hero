import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

const Profile = () => {
  const [incidents, setIncidents] = useState([])
  const history = useHistory()

  // Buscar valor no localStorage do navegador.
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  // Executar uma função em algum determinado momento de um componente.
  // Nesse caso, assim que "/profile" for acessado, a listagem dos casos é executada.
  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ongId])

  // Função Deletar caso
  const  handleDeleteIncident = async (id) => {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      })
      
      //Atualizar a lista, removendo em tempo real o caso exluído.
      setIncidents(incidents.filter(incident => incident.id !== id))

    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
            Cadastrar novo caso
        </Link>
        
        <button onClick={handleLogout} type="button">
            <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(incident => (
        <li key={incident.id}>
          <strong>CASO:</strong>
          <p>{incident.title}</p>

          <strong>DESCRIÇÃO:</strong>
          <p>{incident.description}</p>

          <strong>VALOR:</strong>

          
          <p>{Intl.NumberFormat // Classe global do Javascript: Internacionalização
              ('pt-BR', { 
                style: 'currency',
                currency: 'BRL'
              })
              .format(incident.value)
             }
          </p>

          <button onClick={ () => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>               
        ))}
      </ul>
    </div>
  );
}

export default Profile
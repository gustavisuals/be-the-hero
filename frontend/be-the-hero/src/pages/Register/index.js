import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

import './styles.css'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory();


  // Função de Registro
  const handleRegister = async (eventSubmit) => {
    eventSubmit.preventDefault()

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    }
    
    try {            
      const response = await api.post('ongs', data)
      alert(`Seu ID de acesso: ${ response.data.id }`)
      history.push('/'); // Direcionar para rota inicial(Home)

    } catch (error) {
      alert('Erro no cadastro, tente novamente.')
    }
}
  // Resposta HTML
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={ logoImg } alt="Be The Hero"/>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Fazer logon
          </Link>                    
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={eventSubmit => setName(eventSubmit.target.value)}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={eventSubmit => setEmail(eventSubmit.target.value)}
          />

          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={eventSubmit => setWhatsapp(eventSubmit.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={eventSubmit => setCity(eventSubmit.target.value)}
            />

            <input
              placeholder="UF" maxLength="2"
              style={{ width: 80 }} width="80"
              value={uf}
              onChange={eventSubmit => setUf(eventSubmit.target.value)}
            />
          </div>

          <button className="button" type="submit"> Cadastrar </button>

        </form>
      </div>
    </div>
  )
}

export default Register
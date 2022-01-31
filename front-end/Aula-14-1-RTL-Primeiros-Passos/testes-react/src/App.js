import React,{ Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) { // Contrutor aonde aonde setamos o estado inicial da aplicação
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) { // Aqui temos duas funções sendo que uma delas é usada para controlar o input de email
    this.setState({ email: value });
  }

  changeSaveEmail(value) { // E essa função é chamada quando clicamos no botão
    this.setState({ saveEmail: value});
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className='App'>
        <label htmlFor='id-email'>
          Email
          <input            //Aqui temos o nosso input de email que está dentro de uma label
          id='id-email'
          value={ email }
          type='email'
          onChange={ (e) => this.changeEmail(e.target.value) }
          />
          </label>
          <input           //Aqui temos dois inputs do tipo de botão
          id='btn-enviar'
          type='button'
          data-testid='id-send'
          value='Enviar'
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input id='btn-id' type='button' value='Voltar' />
        <h2 data-testid='id-email-user'>{`Valor: ${saveEmail}`}/</h2>
      </div>
    );
  }
}

export default App;

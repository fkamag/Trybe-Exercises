import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      age: 0,
      about: '',
      check: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [ name ]: value,
    });
  }

  handleSubmit(event) {
    alert('Seu cadastro foi enviado');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Cadastro</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Nome
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Idade
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Conte um pouco sobre você
            <br></br>
            <textarea
              rows="5" cols="50"
              name="about"
              value={this.state.about}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Envie uma foto
            <br></br>
            <input
              type="file"
              name="photo"
            />
          </label>
          <br></br>
          <label>
            Confirme os dados
            <input
              type="checkbox"
              name="check"
              value={this.state.check}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Form;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    const {
      primeiroReducer: { nome, email, cpf, endereco, cidade, estado },
      segundoReducer: { curriculo, cargo, descricao } } = this.props;
    console.log(this.props);
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

FormDataDisplay.propTypes = {
  primeiroReducer: PropTypes.shape({
    nome: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    endereco: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
  }).isRequired,
  segundoReducer: PropTypes.shape({
    curriculo: PropTypes.string,
    cargo: PropTypes.string,
    descricao: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(FormDataDisplay);

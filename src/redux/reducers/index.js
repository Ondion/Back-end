const primeiroReducer = (state = {}, action) => {
  switch (action.type) {
  case 'handlePersonalForm':
    return {
      ...state,
      nome: action.nome,
      email: action.email,
      cpf: action.cpf,
      endereco: action.endereco,
      cidade: action.cidade,
      estado: action.estado,
    };
  default:
    return state;
  }
};

const segundoReducer = (state = {}, action) => {
  switch (action.type) {
  case 'handleProfessionalForm':
    return {
      ...state,
      curriculo: action.curriculo,
      cargo: action.cargo,
      descricao: action.descricao,
    };
  default:
    return state;
  }
};

export { segundoReducer, primeiroReducer };

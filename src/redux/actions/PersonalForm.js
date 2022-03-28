const personalForm = ({
  nome, email, cpf, endereco, cidade, estado,
}) => ({
  type: 'handlePersonalForm',
  nome,
  email,
  cpf,
  endereco,
  cidade,
  estado,
});

const professionalForm = ({ curriculo, cargo, descricao }) => ({
  type: 'handleProfessionalForm',
  curriculo,
  cargo,
  descricao,
});

export { personalForm, professionalForm };

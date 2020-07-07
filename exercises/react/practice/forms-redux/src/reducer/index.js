const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
};

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        name: action.value,
      };
    case 'ADD_EMAIL':
      return {
        ...state,
        email: action.value,
      };
    case 'ADD_CPF':
      return {
        ...state,
        cpf: action.value,
      };
    case 'ADD_ADRESS':
      return {
        ...state,
        address: action.value,
      };
    default:
      return state;
  }
}

export default listReducer;

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
    case 'ADD_FORM':
      return {
        ...state,
        name: action.name,
        email: action.email,
        cpf: action.cpf,
        address: action.address,
        city: action.city,
        countryState: action.countryState,
        addressType: action.addressType,
        resume: action.resume,
        role: action.role,
        roleDescription: action.roleDescription,
      };
    default:
      return state;
  }
}

export default listReducer;

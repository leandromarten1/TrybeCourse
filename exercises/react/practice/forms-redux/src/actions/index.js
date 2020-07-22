export const addForm = (
  name,
  email,
  cpf,
  address,
  city,
  countryState,
  resume,
  role,
  roleDescription,
) => ({
  type: 'ADD_FORM',
  name,
  email,
  cpf,
  address,
  city,
  countryState,
  resume,
  role,
  roleDescription,
});


export const validateEmail = (email) => {
  //   validate email string using regex
  const emailRegex = /\S+@\S+\.\S+/;
  const isValidEmail = emailRegex.test(email);
  return isValidEmail;
};

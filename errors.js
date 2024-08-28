
const _error = (id) => {
    switch (id) {
      case "invalidArgs":
        return "Invalid Arguments... (use help command)";
        break;
      case "invalidName":
        return "Name must be greater than 4 letters";
        break;
      case "invalidPhone":
        return "Invalid Phone number";
        break;
      case "invalidEmail":
        return "Invalid Email adress";
        break;
      case "invalidID":
        return "Id not found";
        break;
      case "invalidFile":
        return "File not found";
        break;
      default:
        "Error not registered";
    }
  };

  export { _error };
import fs from "node:fs";
import { randomUUID } from "crypto";
import { isNumber, isUndefined } from "node:util";

const URL_FILE = "./data/contacts.json";
const HELP_FILE = "./data/help.txt";

const readContacts = (fav) => {
  const exist = fs.existsSync(URL_FILE);
  if (!exist) {
    fs.writeFileSync(URL_FILE, JSON.stringify([]));
    return [];
  } else {
    if (fav === undefined) {
      const data = fs.readFileSync(URL_FILE);
      return JSON.parse(data);
    } else {
      if (fav === "favorito") {

        const data = JSON.parse(fs.readFileSync(URL_FILE));

        const favorito2 = data.filter((contact) => contact.fav == true);

        return favorito2;

      } else {
        console.log("parametro incorrecto");
      }
    }
  }
};

const addContact = (name, phone, email, fav) => {
  if (name === undefined || name.length <= 3) return "Nombre menor a 4 letras";

  if (isNaN(phone)) return "Phone invalido";

  if (email === undefined || !email.includes("@"))
    return "direccion de email incorrecta";

  if (fav !== undefined && fav !== "true" && fav !== "false")
    return "opcion invalida en favoritos";

  if (fav === "true") fav = true;
  
  if (fav === "false") fav = false;

  if (fav === undefined) fav = false;

  const contact = {
    id: randomUUID(),
    name,
    phone,
    email,
    fav,
  };

  const contactData = JSON.parse(fs.readFileSync(URL_FILE));

  contactData.push(contact);

  fs.writeFileSync(URL_FILE, JSON.stringify(contactData));

  return contact;
};

const deleteContact = (id) => {
  if (!id) {
    return "Id is required";
  }

  const contactData = JSON.parse(fs.readFileSync(URL_FILE));

  const foundContact = contactData.find((contact) => contact.id === id);

  if (!foundContact) {
    return "Id not found";
  }

  const newContats = contactData.filter((contact) => contact.id !== id);

  fs.writeFileSync(URL_FILE, JSON.stringify(newContats));

  return foundContact;
};

const help = () => {
  const exist = fs.existsSync(HELP_FILE); //->boolean
  if (!exist) {
    return "File not found";
  } else {
    return fs.readFileSync(HELP_FILE, "utf-8");
  }
};

export { readContacts, addContact, deleteContact, help };

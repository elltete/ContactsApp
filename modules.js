import fs from "node:fs";
import { randomUUID } from "crypto";
import { _error } from "./errors.js";

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
      if (fav === "favoritos") {
        const data = JSON.parse(fs.readFileSync(URL_FILE));

        const dataFavs = data.filter((contact) => contact.fav === true);

        return dataFavs;
      } else {
        return _error("invalidArgs");
      }
    }
  }
};

const validateArgs = (name, phone, email) => {
  if (name === undefined || phone === undefined || email === undefined) {
    return true;
  } else {
    return false;
  }
};

const addContact = (name, phone, email, fav) => {
  if (validateArgs(name, phone, email)) return _error("invalidArgs");

  if (name.length <= 4) return _error("invalidName");

  if (isNaN(phone)) return _error("invalidPhone");

  if (!email.includes("@")) return _error("invalidEmail");

  if (fav !== undefined) fav = fav.toLowerCase();

  if (fav !== undefined && fav !== "true" && fav !== "false")
    return _error("invalidArgs");

  if (fav === "true") fav = true;

  if (fav === "false" || fav === undefined) fav = false;

  const contact = {
    id: randomUUID(),
    name: name.toLowerCase(),
    phone,
    email: email.toLowerCase(),
    fav,
  };

  const contactData = readContacts();

  contactData.push(contact);

  fs.writeFileSync(URL_FILE, JSON.stringify(contactData));

  return contact;
};

const deleteContact = (id) => {
  if (!id) return _error("invalidArgs");

  const contactData = readContacts();

  const foundContact = contactData.find((contact) => contact.id === id);

  if (!foundContact) return _error("invalidID");

  const newContats = contactData.filter((contact) => contact.id !== id);

  fs.writeFileSync(URL_FILE, JSON.stringify(newContats));

  return foundContact;
};

const help = () => {
  const exist = fs.existsSync(HELP_FILE);
  if (!exist) {
    return _error("invalidFile");
  } else {
    return fs.readFileSync(HELP_FILE, "utf-8");
  }
};

export { readContacts, addContact, deleteContact, help };

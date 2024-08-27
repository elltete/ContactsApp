
import { readContacts , addContact, deleteContact , help } from "././modules.js";

const args = process.argv.splice(2);


switch (args[0]) {
    case "help":
        console.log(help());
    break;
    case "list":
        console.log(readContacts(args[1]));
    break;
    case "add":
        console.log(addContact(args[1], args[2], args[3], args[4]));
    break;
    case "delete":
        console.log(deleteContact(args[1]));
    break;
    default:
        console.log("Invalid Arguments...")
}



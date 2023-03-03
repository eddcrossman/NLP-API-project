import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { checkMeaning } from './js/meaningChecker'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    checkForName,
    handleSubmit,
    checkMeaning
   }

// console.log(checkForName);
// console.log(handleSubmit);


// alert("I EXIST")
// console.log("CHANGE!!");
checkMeaning();

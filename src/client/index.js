import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { meaningTest } from './js/requestHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    checkForName,
    handleSubmit,
    meaningTest
   }

// console.log(checkForName);
// console.log(handleSubmit);


// alert("I EXIST")
// console.log("CHANGE!!");
meaningTest();

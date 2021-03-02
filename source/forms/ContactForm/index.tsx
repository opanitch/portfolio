import { FormSwitcher } from 'Components/Form/FormStateHandler';

import EditContactForm from './states/EditForm';
import SuccessContactForm from './states/SuccessForm';

const ContactForm = FormSwitcher({
  FormEdit: EditContactForm,
  FormSuccess: SuccessContactForm,
});

export default ContactForm;

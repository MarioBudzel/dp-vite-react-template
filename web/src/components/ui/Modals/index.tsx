import ConfirmModal from './_components/ConfirmModal.component';
import FormModal from './_components/FormModal.component';

const Modals: {
  Confirm: typeof ConfirmModal;
  Form: typeof FormModal;
} = () => {
  return <></>;
};

Modals.Confirm = ConfirmModal;
Modals.Form = FormModal;

export default Modals;

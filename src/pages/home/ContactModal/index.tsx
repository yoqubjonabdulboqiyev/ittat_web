import { useState, useEffect } from "react";
import SimpleButton from "../../../components/SimpleButton";
import ModalBlur, { TMessageData } from "./ModalBlur";
import { useApiMutation } from "../../../hooks/queryHooks";
import { toast } from "react-hot-toast";
import { useTranslation } from "next-i18next";

function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, status, error } = useApiMutation<TMessageData>(
    "contact/",
    "post"
  );

  const {t} = useTranslation();

  useEffect(() => {
     if (status === 'success') {
          toast.success(t('TOAST_SEND_SUCCESS'))
     }
     if (status === 'error') {
          toast.error(error)
          console.log('error:', error)
     }
     console.log('status:', status)
  }, [status, error]);

  return (
    <>
      <SimpleButton
        onClick={() => setIsOpen(true)}
        css={{
          padding: "24px 32px",
          "&:hover, &:focus": {
            backgroundColor: "white",
            color: "var(--secondary) !important",
          },
        }}
        className="inverted__button"
      >
        {t('LETS_TALK')}
      </SimpleButton>
      <ModalBlur mutate={mutate} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default ContactModal;

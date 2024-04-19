import { Button, Input, Modal, Textarea } from "@nextui-org/react";
import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useTranslation } from "next-i18next";
import { UseMutateFunction } from "react-query";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  mutate: UseMutateFunction<
    AxiosResponse<any, any>,
    any,
    TMessageData,
    unknown
  >;
};

export type TMessageData = {
  name: string;
  message: string;
  phone_number: string;
};

function ModalBlur({ isOpen, setIsOpen, mutate }: ModalProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    clearErrors,
  } = useForm<TMessageData>({
    defaultValues: {
      name: "",
      message: "",
      phone_number: "",
    },
  });

  const handleClose = () => {
    setIsOpen(false);
    clearErrors();
  };

  const { t } = useTranslation();

  const handleSend = (data: TMessageData) => {
    if (data.phone_number.split(" ").join("").length !== 9) {
      setError("phone_number", {
        message: t("VALID_PHONE_NUMBER") || "",
        type: "pattern",
      });
      return;
    }
    mutate({
      name: data.name,
      message: data.message,
      phone_number: "+998" + data.phone_number.split(" ").join(""),
    });
    setIsOpen(false);
    toast.loading(t("TOAST_SENDING_MES"), { duration: 1000 });

    console.log("data", data);
    reset();
  };

  console.log("errors: ", errors);
  return (
    <>
      <Modal
        css={{ margin: "0 10px" }}
        blur
        closeButton
        open={isOpen}
        onClose={handleClose}
      >
        <Modal.Header>
          <h4>{t("CONTACT_US")}</h4>
        </Modal.Header>

        <form onSubmit={handleSubmit(handleSend)}>
          <Modal.Body>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder={t("C_FULL_NAME") || ""}
                  clearable
                  fullWidth
                  css={{
                    marginBottom: errors.name?.message ? "2rem" : "1rem",
                  }}
                  status={errors.name ? "error" : "default"}
                  helperText={errors.name?.message}
                />
              )}
              rules={{
                required: {
                  message: t("FIELD_REQUIRED"),
                  value: true,
                },
              }}
            />
            <Controller
              name="phone_number"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder={t("C_PHONE_NUMBER") || ""}
                  type="tel"
                  fullWidth
                  labelLeft="+998"
                  maxLength={9}
                  status={errors.phone_number ? "error" : "default"}
                  helperText={errors.phone_number?.message}
                  css={{
                    marginBottom: errors.phone_number?.message
                      ? "2rem"
                      : "1rem",
                  }}
                />
              )}
              rules={{
                pattern: {
                  message: t("VALID_PHONE_NUMBER"),
                  value: /[0-9 ]/,
                },
                required: {
                  message: t("FIELD_REQUIRED"),
                  value: true,
                },
              }}
            />
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder={t("C_MESSAGE") || ""}
                  fullWidth
                  status={errors.message ? "error" : "default"}
                  helperText={errors.message?.message}
                  css={{
                    marginBottom: errors.message?.message
                      ? "1rem !important"
                      : "0",
                  }}
                />
              )}
              rules={{
                required: {
                  message: t("FIELD_REQUIRED"),
                  value: true,
                },
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">{t("SEND")}</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalBlur;

import { Dispatch, SetStateAction, useState } from "react";
import { AxiosResponse } from "axios";
import { useForm, Controller } from "react-hook-form";
import { UseMutateFunction } from "react-query";
import { toast } from "react-hot-toast";
import {
  Button,
  Dropdown,
  Input,
  Modal,
  Radio,
  Textarea,
} from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { coursesData } from "./data";

type ModalProps = {
  chosenCourse: number | null;
  setChosenCourse: Dispatch<SetStateAction<number | null>>;
  mutate: UseMutateFunction<
    AxiosResponse<any, any>,
    any,
    TRegisterData,
    unknown
  >;
};

export interface TRegisterData {
  last_first_name: string;
  phone_number: string;
  day_course: string;
  courses: string;
  day_time: string;
}

interface IFormData {
  last_first_name: string;
  phone_number: string;
}

function ChooseCourseModal({
  chosenCourse,
  setChosenCourse,
  mutate,
}: ModalProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    clearErrors,
  } = useForm<IFormData>({
    defaultValues: {
      last_first_name: "",
      phone_number: "",
    },
  });

  const { t } = useTranslation();
  // const courseInd =
  const courseData = coursesData.find((c) => c.id === chosenCourse);
  const [studyDay, setStudyDay] = useState("Dushanba Chorshanba Juma");
  const [studyTime, setStudyTime] = useState("Tushlikgacha");

  const handleClose = () => {
    setChosenCourse(null);
    clearErrors();
  };

  const handleSend = (data: IFormData) => {
    if (data.phone_number.split(" ").join("").length !== 9) {
      setError("phone_number", {
        message: t("VALID_PHONE_NUMBER") || "",
        type: "pattern",
      });
      return;
    }
    mutate({
      last_first_name: data.last_first_name,
      phone_number: "+998" + data.phone_number,
      courses: courseData?.name2 || "",
      day_course: studyDay,
      day_time: studyTime,
    });
    setChosenCourse(null);
    toast.loading(t("TOAST_SENDING_MES"), { duration: 1000 });

    console.log("data", data);
    reset();
  };

  console.log("errors: ", errors);

  const handleCourseChange = (selectedCourses: any) => {
    const selCourse = Number(Array.from(selectedCourses)[0]);
    console.log(
      "handleCourseChange, what is changing?",
      selectedCourses,
      selCourse
    );
    setChosenCourse(selCourse);
  };
  const isOpen = chosenCourse !== null;
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
          <h4>Kursga yozilish</h4>
        </Modal.Header>

        <form onSubmit={handleSubmit(handleSend)}>
          <Modal.Body>
            <Controller
              name="last_first_name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder={t("C_FULL_NAME") || ""}
                  clearable
                  fullWidth
                  css={{
                    marginBottom: errors.last_first_name?.message
                      ? "2rem"
                      : "1rem",
                  }}
                  status={errors.last_first_name ? "error" : "default"}
                  helperText={errors.last_first_name?.message}
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

            <Dropdown>
              <Dropdown.Button flat>{courseData?.name2}</Dropdown.Button>
              <Dropdown.Menu
                aria-label="kurslar"
                onSelectionChange={handleCourseChange}
                selectionMode="single"
                selectedKeys={courseData?.id ? `${courseData.id}` : undefined}
              >
                {coursesData.map((course) => (
                  <Dropdown.Item key={course.id}>{course.name2}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Radio.Group
              css={{
                ".nextui-radio-group-label": {
                  fontSize:
                    "calc(0.9 * var(--nextui--inputFontSize)) !important",
                },
                ".nextui-radio-label": {
                  fontSize: "var(--nextui--inputFontSize) !important",
                },
              }}
              value={studyDay}
              onChange={setStudyDay}
              label="O'qish kunlarini tanlang"
              defaultValue="Dushanba Chorshanba Juma"
            >
              <Radio value="Dushanba Chorshanba Juma">
                Dushanba Chorshanba Juma
              </Radio>
              <Radio value="Seshanba Payshanba Shanba">
                Seshanba Payshanba Shanba
              </Radio>
            </Radio.Group>

            <Radio.Group
              css={{
                ".nextui-radio-group-label": {
                  fontSize:
                    "calc(0.9 * var(--nextui--inputFontSize)) !important",
                },
                ".nextui-radio-label": {
                  fontSize: "var(--nextui--inputFontSize) !important",
                },
              }}
              value={studyTime}
              onChange={setStudyTime}
              label="O'qish paytini tanlang"
              defaultValue="Tushlikgacha"
            >
              <Radio value="Tushlikgacha">Tushlikgacha</Radio>
              <Radio value="Tushlikdan keyin">Tushlikdan keyin</Radio>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">{t("SEND")}</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ChooseCourseModal;

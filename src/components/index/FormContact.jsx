import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";

export default function FormContact() {
  //Style modal
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const [backdrop, setBackdrop] = React.useState("opaque");

  const handleOpen = (size, backdrop) => {
    setSize(size);
    setBackdrop(backdrop);
    onOpen();
  };

  const handleClose = () => {
    setTelField("");
    setNameField("");
    setDescriptionField("");
    onClose();
  };

  //Information
  const [telField, setTelField] = React.useState("");
  const [nameField, setNameField] = React.useState("");
  const [descriptionField, setDescriptionField] = React.useState("");
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [isTelValid, setIsTelInvalid] = React.useState(false);
  const [isNameInvalid, setIsNameInvalid] = React.useState(false);
  const [isDesInvalid, setIsDesInvalid] = React.useState(false);

  const validateEmailIsIncorrect = (email) => {
    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
      ? false
      : true;
  };

  const validateTelIsIncorrect = (tel) => {
    return tel.match(/^3\d{9,}$/) ? false : true;
  };

  const validateInputIsVoid = (data) => {
    return data === "" ? true : false;
  };

  const telChange = (tel) => {
    setTelField(tel);

    if (!formSubmitted) {
      return;
    }

    setIsTelInvalid(validateTelIsIncorrect(tel) || validateInputIsVoid(tel));
  };

  const nameChange = (name) => {
    setNameField(name);

    if (!formSubmitted) {
      return;
    }

    setIsNameInvalid(validateInputIsVoid(name));
  };
  const descChange = (description) => {
    setDescriptionField(description);

    if (!formSubmitted) {
      return;
    }

    // setIsDesInvalid(validateInputIsVoid(description));
  };

  const handleSubmit = (e) => {
    let isCorrect = true;

    if (!formSubmitted) {
      setFormSubmitted(true);
    }

    if (validateTelIsIncorrect(telField) || validateInputIsVoid(telField)) {
      setIsTelInvalid(true);
      isCorrect = false;
    }
    if (validateInputIsVoid(nameField)) {
      setIsNameInvalid(true);
      isCorrect = false;
    }
    if (validateInputIsVoid(descriptionField)) {
      // setIsDesInvalid(true);
      // isCorrect = false;
    }

    if (isCorrect) {
      sendInfo();
      onClose();
      cleanForm();
    }

    return;
  };

  const cleanForm = () => {
    setTelField("");
    setIsTelInvalid(false);

    setNameField("");
    setIsNameInvalid(false);

    setDescriptionField("");
    setIsDesInvalid(false);

    setFormSubmitted(false);
  };

  const sendInfo = () => {
    const data = {
      name: nameField,
      tel: telField,
      description: descriptionField,
    };
    console.log(data);
  };

  return (
    <>
      <Button
        variant="ghost"
        color="primary"
        className=""
        onPress={() => handleOpen("2xl", "opaque")}
      >
        Agenda tu asesoría gratis
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        backdrop="opaque"
        placement="center"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Agenda tu asesoría
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div className="flex gap-4">
                <Input
                  name="nameUser"
                  type="name"
                  label="Nombre *"
                  placeholder="Nombre"
                  labelPlacement="outside"
                  isInvalid={isNameInvalid}
                  color={isNameInvalid ? "danger" : ""}
                  errorMessage={isNameInvalid && "El campo no debe estar vacio"}
                  onValueChange={nameChange}
                />
                <Input
                  name="number"
                  type="tel"
                  label="Celular *"
                  placeholder="Celular"
                  labelPlacement="outside"
                  isInvalid={isTelValid}
                  color={isTelValid ? "danger" : ""}
                  errorMessage={isTelValid && "Ingrese un telefono valido"}
                  onValueChange={telChange}
                />
              </div>
              <div className="w-full">
                <Textarea
                  name="description"
                  label="Descripción (Opcional)"
                  placeholder="Escribe la razón de tu asesoría"
                  labelPlacement="outside"
                  isInvalid={isDesInvalid}
                  color={isDesInvalid ? "danger" : ""}
                  errorMessage={isDesInvalid && "El campo no debe estar vacio"}
                  onValueChange={descChange}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onClick={handleSubmit}>
              Agendar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

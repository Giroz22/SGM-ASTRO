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
    setEmailField("");
    setNameField("");
    setDescriptionField("");
    onClose();
  };

  //Information
  const [emailField, setEmailField] = React.useState("");
  const [nameField, setNameField] = React.useState("");
  const [descriptionField, setDescriptionField] = React.useState(
    "Hola, me podrías ayudar con una asesoría"
  );
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = React.useState(false);
  const [isNameInvalid, setIsNameInvalid] = React.useState(false);
  const [isDesInvalid, setIsDesInvalid] = React.useState(false);

  const validateEmailIsIncorrect = (email) => {
    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
      ? false
      : true;
  };

  const validateInputIsVoid = (data) => {
    return data === "" ? true : false;
  };

  const emailChange = (email) => {
    setEmailField(email);

    if (!formSubmitted) {
      return;
    }

    setIsEmailInvalid(
      validateEmailIsIncorrect(email) || validateInputIsVoid(email)
    );
  };

  const nameChange = (name) => {
    setNameField(name);

    if (!formSubmitted) {
      return;
    }

    setIsNameInvalid(validateInputIsVoid(name));
    console.log(validateInputIsVoid(name));
  };
  const descChange = (description) => {
    setNameField(description);

    if (!formSubmitted) {
      return;
    }

    setIsDesInvalid(validateInputIsVoid(description));
  };

  const handleSubmit = (e) => {
    let isCorrect = true;

    if (!formSubmitted) {
      setFormSubmitted(true);
    }

    if (
      validateEmailIsIncorrect(emailField) ||
      validateInputIsVoid(emailField)
    ) {
      setIsEmailInvalid(true);
      isCorrect = false;
    }
    if (validateInputIsVoid(nameField)) {
      setIsNameInvalid(true);
      isCorrect = false;
    }
    if (validateInputIsVoid(descriptionField)) {
      setDescriptionField(true);
      isCorrect = false;
    }

    if (isCorrect) {
      sendInfo();
      onClose();
      cleanForm();
    }

    return;
  };

  const cleanForm = () => {
    setEmailField("");
    setIsEmailInvalid(false);

    setNameField("");
    setIsNameInvalid(false);

    setDescriptionField("");
    setIsDesInvalid(false);

    setFormSubmitted(false);
  };

  const sendInfo = () => {
    const data = {
      name: nameField,
      email: emailField,
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
        Contactame
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
            Formulario de contacto
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div className="flex gap-4">
                <Input
                  name="email"
                  type="email"
                  label="Correo"
                  placeholder="Escribe tu correo"
                  labelPlacement="outside"
                  isInvalid={isEmailInvalid}
                  color={isEmailInvalid ? "danger" : ""}
                  errorMessage={isEmailInvalid && "Ingrese un correo valido"}
                  onValueChange={emailChange}
                />
                <Input
                  name="nameUser"
                  type="name"
                  label="Nombre"
                  placeholder="Escribe tu nombre"
                  labelPlacement="outside"
                  isInvalid={isNameInvalid}
                  color={isNameInvalid ? "danger" : ""}
                  errorMessage={isNameInvalid && "El campo no debe estar vacio"}
                  onValueChange={nameChange}
                />
              </div>
              <div className="w-full">
                <Textarea
                  name="description"
                  label="Descripción"
                  placeholder="Escribe una descripción"
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
              Enviar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

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

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) ? true : false;

  const isEmailValid = React.useMemo(() => {
    emailField !== "" ? true : false;
    return validateEmail(emailField);
  }, [emailField]);

  const isNameValid = React.useMemo(() => {
    return nameField !== "" ? true : false;
  }, [nameField]);

  const isDesValid = React.useMemo(() => {
    return descriptionField !== "" ? true : false;
  }, [descriptionField]);

  const handleSubmit = (e) => {
    setFormSubmitted(true);
    const isValid = isEmailValid || isNameValid || isDesValid;
    console.log(isEmailValid || isNameValid || isDesValid);
    if (!isValid) {
      console.log("Error");
      return;
    }
    console.log(emailField, nameField, descriptionField);
    onClose();
    cleanForm();
  };

  const cleanForm = () => {
    setEmailField("");
    setNameField("");
    setDescriptionField("Hola, me podrías ayudar con una asesoría");
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
                  isInvalid={!isEmailValid}
                  color={!isEmailValid ? "danger" : ""}
                  errorMessage={!isEmailValid && "Ingrese un correo valido"}
                  onValueChange={setEmailField}
                />
                <Input
                  name="nameUser"
                  type="name"
                  label="Nombre"
                  placeholder="Escribe tu nombre"
                  labelPlacement="outside"
                  isInvalid={!isNameValid}
                  color={!isNameValid ? "danger" : ""}
                  errorMessage={!isNameValid && "El campo no debe estar vacio"}
                  onValueChange={setNameField}
                />
              </div>
              <div className="w-full">
                <Textarea
                  name="description"
                  label="Descripción"
                  placeholder="Escribe una descripción"
                  labelPlacement="outside"
                  isInvalid={!isDesValid}
                  color={!isDesValid ? "danger" : ""}
                  errorMessage={!isDesValid && "El campo no debe estar vacio"}
                  onValueChange={setDescriptionField}
                  value={descriptionField}
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

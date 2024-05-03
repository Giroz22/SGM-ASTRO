import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
} from "@nextui-org/react";

export default function CardInfo({ props }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("3xl");

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  const onWhatsapp = () => {
    location.href = `https://api.whatsapp.com/send?phone=+573202543661&text=Hola,%20me%20podrias%20asesorar%20con%20${props.title}`;
  };

  const onEmail = () => {
    location.href =
      location.href = `mailto:sgmconsultoressas@gmail.com?subject=SGM%20asesor%C3%ADa&body=Hola%2C%20me%20podr%C3%ADas%20asesorar%20con%20${props.title}`;
  };

  return (
    <>
      <Button
        className="w-[200px] h-[200px] text-wrap bg-primaryDark"
        key={"3xl"}
        onPress={() => handleOpen("3xl")}
      >
        <h3 className="text-center text-lg">{props.title}</h3>
      </Button>

      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h2 className="text-primary tracking-normal text-center">
                  {props.title}
                </h2>
              </ModalHeader>
              <ModalBody>
                <div className="flex justify-evenly gap-6">
                  <p className="text-justify w-[50%]">{props.description}</p>
                  <Image src={props.urlImg} alt="" width={400} />
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <div className="flex gap-4">
                  <Button
                    color="default"
                    variant="bordered"
                    onPress={onWhatsapp}
                    className="border-primary text-primary hover:text-white hover:border-[#25D366] hover:bg-[#25D366]"
                  >
                    <i className="bi bi-whatsapp mr-2.5"></i>
                    Whatsapp
                  </Button>
                  <Button
                    color="default"
                    variant="bordered"
                    onPress={onEmail}
                    className="border-primary text-primary hover:text-white hover:border-[#00aae4] hover:bg-[#00aae4]"
                  >
                    <i className="bi bi-envelope mr-2.5"></i>
                    Email
                  </Button>
                </div>
                <Button color="danger" variant="ghost" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

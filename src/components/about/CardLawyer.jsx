//NextUI
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Avatar,
  Chip,
} from "@nextui-org/react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function CardLawyer({ props }) {
  return (
    <Card className="w-full h-[300px]">
      <CardBody className="flex items-center justify-center">
        <Avatar
          src={props.urlPicture}
          className="h-24 w-24 mb-4"
          isBordered
          color="primary"
          name={props.name}
        />
        <h3 className="mb-2 text-lg text-center text-primary">{props.name}</h3>
        <Chip color="success" variant="flat">
          {props.position}
        </Chip>
      </CardBody>
      <Divider />
      <CardFooter className="flex p-0 h-14">
        <Link
          href={props.email}
          className="w-1/2 h-full flex justify-center hover:text-[#00aae4]"
        >
          <i className="bi bi-envelope mr-2.5"></i>
          Email
        </Link>
        <Divider orientation="vertical" />
        <Link
          href={props.whatsapp}
          className="h-full w-1/2 flex justify-center hover:text-[#25D366]"
        >
          <i className="bi bi-whatsapp mr-2.5"></i>
          Whatsapp
        </Link>
      </CardFooter>
    </Card>
  );
}

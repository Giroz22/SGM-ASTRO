import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function CardInfo({ props }) {
  return (
    <Link color="secondary" isExternal href={props.href}>
      <Card className="max-w-[300px] h-[400px]" tabIndex={true}>
        <CardHeader className="p-0 h-2/5 overflow-hidden">
          <Image alt="Lawyer" className="" src={props.urlImg} />
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-2">
          <h3 className="text-center">{props.title}</h3>
          <p className=" text-justify">{props.description}</p>
        </CardBody>
      </Card>
    </Link>
  );
}

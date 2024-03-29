import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function CardInfo({ props }) {
  return (
    <Card className="max-w-[300px]">
      <CardHeader className="p-0">
        <Image
          alt="Card background"
          className="object-cover rounded-none w-full"
          src={props.urlImg}
        />
      </CardHeader>
      <Divider />
      <CardBody className="flex gap-2">
        <h3 className="text-center">{props.title}</h3>
        <p className=" text-justify">{props.description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link color="secondary" isExternal showAnchorIcon href={props.href}>
          Quiero conocer más
        </Link>
      </CardFooter>
    </Card>
  );
}

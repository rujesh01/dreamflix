import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type Props = {
  cardTitle: string;
  cardDescription: string;
  children: React.ReactNode;
  cardFooter: string;
  footerLink: string;
};

const CardWrapper = ({
  cardTitle,
  cardDescription,
  children,
  cardFooter,
  footerLink,
}: Props) => {
  return (
    <Card className="w-[500px] font-bold">
      <CardHeader>
        <CardTitle className="font-bold text-4xl w-full flex items-center justify-center ">
          {cardTitle}
        </CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Link
          className="text-blue-500 w-full flex items-center justify-center hover:underline hover:text-blue-800 "
          href={footerLink}
        >
          {cardFooter}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;

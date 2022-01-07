import { CardBody } from "./CardBody";
import { CardImage } from "./CardImage";
import { CardList } from "./CardList";
import { CardListItem } from "./CardlistItem";
import { CardTitle } from "./CardTitle";
import { CardWrapper } from "./CardWrapper";

export const Card = ({ countryInfo }) => {
  const { img, name, info } = countryInfo;
  return (
    <CardWrapper>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </CardWrapper>
  );
};

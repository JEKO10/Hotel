import data from "../data";
import { useParams } from "react-router-dom";

function SingleRoom() {
  const { id } = useParams();

  const { fields } = data[id];

  return <section>{fields.name}</section>;
}

export default SingleRoom;

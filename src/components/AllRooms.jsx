import data from "../data";

function AllRooms() {
  return (
    <section>
      {data.map((room) => {
        const { fields } = room;
        return (
          <div key={room.id}>
            <img src={room.banner} alt="IMG" />
          </div>
        );
      })}
    </section>
  );
}

export default AllRooms;

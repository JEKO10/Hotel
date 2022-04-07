import data from "../data";

function Filters({ rooms, setRooms }) {
  const handleType = (e) => {
    const target = e.target.value;
    if (target === "all") {
      setRooms(data);
    } else if (target === "single") {
      setRooms(data.filter((room) => room.fields.type === "single"));
    } else if (target === "double") {
      setRooms(data.filter((room) => room.fields.type === "double"));
    } else if (target === "family") {
      setRooms(data.filter((room) => room.fields.type === "family"));
    } else {
      setRooms(data.filter((room) => room.fields.type === "presidential"));
    }
  };

  const handleGuests = (e) => {
    const target = e.target.value;
    setRooms(data.filter((room) => room.fields.capacity >= parseInt(target)));
  };

  return (
    <section className="filters">
      <article>
        <label htmlFor="type">Room Type</label>
        <select name="type" onChange={handleType}>
          <option value="all">All</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="family">Family</option>
          <option value="presidential">Presidential</option>
        </select>
      </article>
      <article>
        <label htmlFor="guests">Guests</label>
        <select name="guests" onChange={handleGuests}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="10">10</option>
        </select>
      </article>
      <article>
        <label htmlFor="price">Room Price $</label>
        <input type="range" name="price" min="0" max="600" />
      </article>
      <article>
        <label htmlFor="size">Room Size</label>
        <div className="size">
          <input type="number" name="min" value={0} />
          <input type="number" name="max" value={1000} />
        </div>
      </article>
      <article>
        <div>
          <input type="checkbox" name="breakfast" id="checkbox" />
          <label htmlFor="breakfast">Breakfast</label>
        </div>
        <div>
          <input type="checkbox" name="pets" id="checkbox" />
          <label htmlFor="pets">Pets</label>
        </div>
      </article>
    </section>
  );
}

export default Filters;

function Filters() {
  return (
    <section className="filters">
      <article>
        <label htmlFor="type">Room Type</label>
        <select name="type">
          <option value="all">All</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="family">Family</option>
          <option value="presidential">Presidential</option>
        </select>
      </article>
      <article>
        <label htmlFor="guests">Guests</label>
        <select name="guests">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
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
          <input type="number" defaultValue="0" />
          <input type="number" defaultValue="1000" />
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

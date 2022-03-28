import React from "react";

function Filters() {
  return (
    <section className="filters">
      <article>
        <label for="type">Room Type</label>
        <select name="type">
          <option value="all">All</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="family">Family</option>
          <option value="presidential">Presidential</option>
        </select>
      </article>
      <article>
        <label for="guests">Guests</label>
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
        <label for="price">Room Price</label>
        <input type="range" name="price" />
      </article>
      <article>
        <label for="size">Room Size</label>
        <div>
          <input type="number" value="0" />
          <input type="number" value="1000" />
        </div>
      </article>
      <article>
        <div>
          <input type="checkbox" name="breakfast" />
          <label for="breakfast">Breakfast</label>
        </div>
        <div>
          <input type="checkbox" name="pets" />
          <label for="pets">Pets</label>
        </div>
      </article>
    </section>
  );
}

export default Filters;

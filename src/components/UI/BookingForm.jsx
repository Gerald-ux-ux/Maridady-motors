import React from "react";
import "../../styles/booking-form.css";

const BookingForm = () => {
  return (
    <form>
      <div class="form-row  ">
        <div class="form-group col-md-3">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group col-md-3">
          <label for="inputPassword4">Car</label>
          <input type="car" class="form-control" placeholder="Car type" />
        </div>
      </div>
      <div class="form-group col-md-3">
        <label for="inputAddress">Address</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div class="form-row">
        <div class="form-group col-md-3">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="form-group col-md-3">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option value="" disabled selected>
              Choose...
            </option>
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Kilifi">Kilifi</option>
            <option value="Kilifi">Embu</option>
            <option value="Kilifi">Machacos</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
      </div>
      <br />
      <br />
      <button className="btn comment__btn mt-3 mb-2">Reserve now</button>
    </form>
  );
};

export default BookingForm;

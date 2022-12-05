import React, { useEffect, useState } from "react";

function CalendarForm(props) {
  const [formData, setFormData] = useState([
    {
      id: 0,
      calendarTitle: "",
      startDate: "",
      endDate: "",
      color: "",
      description: "",
      checked: false,
    },
  ]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // setFormData([...formData, {
    //   [name]: value,
    // }]);
  };
  const onClick = (e) => {
    e.preventDefault();
    props?.action === "add"
      ? props.submitCalendar(e, formData)
      : props.updateCalendar(e, formData);
  };
  const onDelete = () => {
    props?.action === "add" ? props.closeModal() : props.deleteEvent();
  };
  return (
    <form className="form-group">
      <label htmlFor="calendarTitle">Event Name: </label>
      <input
        type="text"
        id="title"
        name="calendarTitle"
        className="form-control"
        onChange={handleChange}
        value={props.calendarTitle || ""}
        required
      />
      <label>Start Date:</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        onChange={handleChange}
        className="form-control"
        value={props.startDate || ""}
        required
      />
      <label>End Date:</label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        onChange={handleChange}
        className="form-control"
        value={props.endDate}
        required
      />
      <label>Choose Event Type</label>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            name="checked"
            value={props.checked || ""}
            onChange={handleChange}
          />
          Mark As Holiday
        </label>
      </div>
      <label>Description(Optional)</label>
      <textarea
        className="form-control"
        name="description"
        onChange={handleChange}
        value={props.description || ""}
      ></textarea>
      <button className="tt-button" type="submit" onClick={(e) => onClick(e)}>
        {props.action === "add" ? "Save" : "Update"}
      </button>
      <button type="reset" className="tt-button" onClick={onDelete}>
        {props.action === "add" ? "Cancel" : "Delete"}
      </button>
    </form>
  );
}

export default CalendarForm;

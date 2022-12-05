import React from "react";
import CalendarForm from "../form";
function UpdateEventForm(props) {
  console.log("UPDATE PROPS",props)
  return (
    <CalendarForm
      submit={props.updateCalendar}
      closeModal={props.closeModal}
      checked={props.checked}
      calendarTitle={props.calendarTitle}
      handleChange={props.handleChange}
      startDate={props.startDate}
      endDate={props.endDate}
      description={props.description}
    ></CalendarForm>
  );
}

export default UpdateEventForm;
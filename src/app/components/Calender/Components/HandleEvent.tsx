import React from "react";
import CalendarForm from "../form";
function HandleEventForm(props) {
  console.log("Component Props", props);
  return (
    <CalendarForm
      calendarTitle={props.calendarTitle}
      handleChange={props.handleChange}
      startDate={props.startDate}
      endDate={props.endDate}
      description={props.description}
      checked={props.checked}
      action={props.action}
      submitCalendar={props.submitCalendar}
      closeModal={props.closeModal}
      updateCalendar={props.updateCalendar}
      deleteEvent={props.deleteEvent}
    />
  );
}

export default HandleEventForm;
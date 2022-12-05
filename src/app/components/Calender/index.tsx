import React, { useState, useEffect, useRef } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import moment from "moment";
import Modal from "@mui/material/Modal";
import HandleEventForm from "./Components/HandleEvent";
import UpdateEventForm from "./Components/UpdateEvent";
import { useStyles } from "./styles";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import next from "./assets/next.png";
import previous from "./assets/previous.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";


type Props = {
  View?: string;
  initialView?: string;
  direction?: any;
};

function Calender(props: Props) {
  const styles = useStyles();
  const calanderRef: any = useRef();
  const [event, setEvent]: any = useState({
    modal: false,
    calendarTitle: "",
    startDate: "",
    endDate: "",
    description: "",
    action: "add",
    id: 0,
    events: [],
    eventInfo: "",
    updateId: "",
    checked: false,
    error: "",
  });
  const [title, setTitle] = useState("");
  //const [openDate, setOpen] = useState(false);
  const [value, setValue] = useState<Date | null>(new Date());
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePickerClick = (event) => {
    setOpen((isOpen) => !isOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleDateClick = (arg) => {
    // setEvent({
    //   ...event,
    //   action: "add",
    //   modal: !event.modal,
    //   startDate: arg.dateStr,
    //   endDate: arg.dateStr,
    // });
  };
  const handleCalenderChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setEvent({ [name]: value });
  };

  const handleEventPositioned = (arg) => {
    arg.el.setAttribute("data-tip", arg.event.extendedProps.description);
  };

  const closeModal = (e) => {
    setEvent({
      modal: false,
      calendarTitle: "",
      startDate: "",
      endDate: "",
      description: "",
      checked: false,
    });
  };

  const submitCalendar = (e, formData) => {
    e.preventDefault();
    let color = "#1abc9c";
    if (event.checked) {
      color = "#a70707";
    }
    setEvent({
      events: [
        ...event.events,
        {
          id: formData.id,
          title: formData.calendarTitle,
          start: formData.startDate,
          end: formData.endDate,
          color: formData.color,
          textColor: "White",
          description: formData.description
            ? formData.description
            : "no description",
        },
      ],
      modal: false,
      id: event.id + 1,
      calendarTitle: "",
      startDate: "",
      endDate: "",
      description: "",
      holidayChecked: false,
    });
  };

  const eventClick = (arg) => {
    let title = arg.event.title;
    let start = moment(arg.event.start).format("YYYY-MM-DD");
    let end = moment(arg.event.end).format("YYYY-MM-DD");
    if (end === "Invalid date") {
      end = start;
    }
    let checked;
    if (arg.event.backgroundColor === "#a70707") {
      checked = true;
    } else {
      checked = false;
    }
    let description = arg.event.extendedProps.description;
    let id = arg.event.id;
    setEvent({
      action: "edit",
      modal: true,
      calendarTitle: title,
      startDate: start,
      endDate: end !== "Invalid date" ? end : start,
      description: description,
      updateId: id,
      eventInfo: arg,
      checked: checked,
    });
  };

  const updateCalendar = (e, formData) => {
    e.preventDefault();
    let idx;
    let id = parseInt(event.updateId);
    let events = [...event.events];
    let color = "#1abc9c";
    if (event.checked) {
      color = "#a70707";
    }
    for (let i = 0; i < events.length; i++) {
      if (events[i]["id"] === id) {
        idx = i;
      }
    }
    let updateEvents = [...event.events];
    updateEvents[idx]["title"] = formData.calendarTitle;
    updateEvents[idx]["start"] = formData.startDate;
    updateEvents[idx]["end"] = formData.endDate;
    updateEvents[idx]["color"] = formData.color;
    updateEvents[idx]["description"] = formData.description;
    setEvent({
      modal: false,
      events: [...updateEvents],
      calendarTitle: "",
      startDate: "",
      endDate: "",
      description: "",
      updateId: "",
      checked: false,
    });
    event.eventInfo.event.remove();
    event.eventInfo.event.source.refetch();
    // ReactTooltip.rebuild();
  };

  //Deleting Calendar Events
  const deleteEvent = () => {
    let idx;
    let id = parseInt(event.updateId);
    let events = [...event.events];
    for (let i = 0; i < events.length; i++) {
      if (events[i]["id"] === id) {
        idx = i;
      }
    }
    events.splice(idx, 1);
    setEvent({
      events: events,
      modal: false,
    });
  };

  const gotoPast = () => {
    if (event.year.length === 4) {
      setEvent({ event: "" });
      let date = event.year + "-01-01";
      let calendar = calanderRef.current.getApi();
      calendar.gotoDate(date); // call a method on the Calendar object
    } else {
      setEvent({ error: "Enter a valid year" });
    }
  };

  const handlePrev = () => {
    let calendar = calanderRef.current.getApi();
    calendar.prev();
    const title = calendar.currentDataManager.data.viewTitle;
    setTitle(title);
  };

  const handleNext = () => {
    let calendar = calanderRef.current.getApi();
    calendar.next();
    const title = calendar.currentDataManager.data.viewTitle;
    setTitle(title);
  };
  useEffect(() => {
    let str = formatDate(new Date(), {
      month: "long",
      year: "numeric",
    });
    setTitle(str);
  }, []);

  return (
    <div className={styles.calenderMain}>
      <Grid container className={styles.headerContainer}>
        <Grid className={styles.headerItem} item xs={12}>
          <Button onClick={handlePrev}>
            <img height={12} src={previous}></img>
          </Button>
          <Typography className={styles.headerText}>{title}</Typography>
          <Grid item>
            <Button onClick={handleNext}>
              <img height={12} src={next}></img>
            </Button>
            <Button sx={{ height: "25px" }} onClick={handlePickerClick}>
              <CalendarMonthIcon />
            </Button>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Grid container justifyContent="space-around">
                <DatePicker
                  open={open}
                  onOpen={() => setOpen(true)}
                  onClose={() => setOpen(false)}
                  label="Date&Time picker"
                  value={value}
                  onChange={handleCalenderChange}
                  PopperProps={{
                    placement: "bottom-end",
                    anchorEl: anchorEl,
                  }}
                  renderInput={(params) => <></>}
                  className={styles.calenderPicker}
                />
              </Grid>
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Grid>
      <FullCalendar
        dateClick={handleDateClick}
        ref={calanderRef}
        dayHeaderClassNames={styles.dayHeader}
        viewClassNames={styles.view}
        dayCellClassNames={styles.dayCell}
        height={595}
        headerToolbar={false}
        dayHeaders={true}
        initialView={props.initialView}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        weekends={true}
        events={event.events}
        eventClick={eventClick}
        allDaySlot={false}
        direction={props.direction}
        slotLabelClassNames={styles.slotLabel}
      />
      <Modal
        open={event.modal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card className={styles.addModal}>
          <div className={styles.modalContainer}>
            <Grid>
              {event.action === "add" ? (
                <Typography align="center" className={styles.headerModal}>
                  Set Calendar Events
                </Typography>
              ) : (
                <Typography align="center" className={styles.headerModal}>
                  Update Calendar Events
                </Typography>
              )}
            </Grid>
            <div className={styles.bodyContainer}>
              <Grid
                container
                sx={{ border: "1px #C6C9CA solid", padding: "10px" }}
              >
                <div>
                  {event.action === "add" ? (
                    <HandleEventForm
                      calendarTitle={event.calendarTitle}
                      handleChange={handleChange}
                      startDate={event.startDate}
                      endDate={event.endDate}
                      description={event.description}
                      closeModal={closeModal}
                      checked={event.checked}
                      action={event.action}
                      submitCalendar={submitCalendar}
                      updateCalendar={updateCalendar}
                      deleteEvent={deleteEvent}
                    />
                  ) : (
                    <UpdateEventForm
                      updateCalendar={updateCalendar}
                      closeModal={closeModal}
                      checked={event.checked}
                      calendarTitle={event.calendarTitle}
                      handleChange={handleChange}
                      startDate={event.startDate}
                      endDate={event.endDate}
                      description={event.description}
                    />
                  )}
                </div>
              </Grid>
            </div>
          </div>
        </Card>
      </Modal>
    </div>
  );
}

export default Calender;

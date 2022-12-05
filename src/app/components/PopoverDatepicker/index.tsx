import { LocalizationProvider, StaticDatePicker, StaticDateRangePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box, Button, Popover, TextField } from '@mui/material'
import { format } from 'date-fns';
import React, { Dispatch, SetStateAction } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type Props = {
    title: string;
    value: any;
    setValue: Dispatch<SetStateAction<number>>;

}

const PopoverDatePicker = (props: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    let newDate = format(props.value, 'dd/MM/yyyy')
    return (
        <div style={{ position: 'relative' }}>
            <Button aria-describedby={id} sx={{
                color: '#333333',
                border: '1px solid #D5D8DE',
                backgroundColor: '#F7F7FA',
                minWidth: '180px',
                fontSize: '14px',
                minHeight: '45px'
            }} onClick={handleClick}>
                {props.value === 0 ? props.title : newDate}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        openTo='day'
                        value={props.value}
                        components={{
                            SwitchViewIcon: KeyboardArrowDownIcon
                        }}
                        onChange={(newValue) => {
                            props.setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    // renderInput={(startProps, endProps) => (
                    //     <React.Fragment>
                    //         <TextField {...startProps} />
                    //         <Box sx={{ mx: 2 }}> to </Box>
                    //         <TextField {...endProps} />
                    //     </React.Fragment>
                    // )}
                    />
                </LocalizationProvider>
                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', backgroundColor: '#fff', padding: '10px 20px 30px 0px' }}><Button sx={{ color: '#333' }} onClick={handleClose}>Cancel</Button><Button variant='contained' sx={{ backgroundColor: '#FFA96A', color: '#fff' }} onClick={handleClose} >Ok</Button></div>
            </Popover>
        </div>
    )
}

export default PopoverDatePicker

// position: 'absolute', bottom: 20, right: 25
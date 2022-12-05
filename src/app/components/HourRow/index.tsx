import React from 'react';

import { Box, Button, ButtonGroup, Checkbox, FormControlLabel } from '@mui/material';

import { useStyles } from './styles';

const HourRow = ({ label, values, checked }) => {

    // console.log(label, "label")
    // console.log(values, "values")
    const styles = useStyles();
    return <>
        <Box className={styles.hourRowContainer}>
            <div>
                <Box display="flex" justifyContent={"space-between"}>

                    <FormControlLabel style={{ marginBottom: 0 }} control={<Checkbox checked={checked} />} label={<Box minWidth={56} mr={4}>
                        {label}
                    </Box>}
                    />
                    {
                        values &&
                        <ButtonGroup color='secondary'>
                            {values.map((value) => <Button className={styles.openingHourButtonLabel} key={value}>{value}</Button>)}
                        </ButtonGroup>
                    }
                </Box>
            </div>
        </Box>
    </>
}

export default HourRow
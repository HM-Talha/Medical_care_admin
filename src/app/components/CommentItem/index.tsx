import { Box, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { getFormattedDateTime } from 'utils/helpers'



const CommentItem = (props: any) => {
    return (
        <Box display="flex" alignItems={'center'} justifyContent={'space-between'}>
            {props?.text && props?.text.length > 40 ? <Tooltip title={props.text}>
                <Typography component='span'>  {props.text.substr(0, 35) + "..."}</Typography>
            </Tooltip> : <Typography component='span'>
                {props?.commentedByUser?.fullName}:{props.text}
            </Typography>}

            <Typography component='span' key={props?.id} dir="ltr">
                {getFormattedDateTime(props?.createdAt, "dd-MM-yyyy / hh:mm a")}
            </Typography>
        </Box>
    )
}

export default CommentItem
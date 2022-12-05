import { Box, Button } from '@mui/material'
import { selectToken } from 'app/containers/Auth/selectors'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { API_URL } from 'utils/constants'
import excellImage from './assets/excellIcon.png'
import { useStyles } from './styles'

type Props = {
    type: 'products' | 'merchants' | 'posts' | 'users'
}

const ExportExcellButton = (props: Props) => {
    const token = useSelector(selectToken)
    const styles = useStyles()
    return (
        <a href={`${API_URL}/${props.type}/download?authToken=${token}`} target='_blank' >
            <Box  className={styles.box}>
                <img src={excellImage} className={styles.image} />
                {/* Excell */}
            </Box>
        </a>
    )
}

export default ExportExcellButton
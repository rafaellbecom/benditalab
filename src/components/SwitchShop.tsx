import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import { Tabacaria } from './Tabacaria'
import { Vestuario } from './Vestuario'

export function SwitchShop (){
    const [isTabacariaVisible, setIsTabacariaVisible] = useState(false);

    const handleToggle = () => {
        setIsTabacariaVisible(!isTabacariaVisible);
      };
    return (
        <Grid container direction="column" alignItems="center">
        <Grid item>
          <Switch checked={isTabacariaVisible} onChange={handleToggle} color="primary" />
        </Grid>
        <Grid item>
          {isTabacariaVisible ? <Tabacaria /> : <Vestuario />}
        </Grid>
      </Grid>
    )
}
import { Box, Button, TextField, Typography, Grid } from '@mui/material'

import { useState, useContext,type FormEvent, type ChangeEvent } from 'react'

import { SiteContext } from '../../context/siteContext'

const AddNewSite = () => {

  const {siteList,setSiteList } = useContext(SiteContext)
  
  const [newSite,setNewSite]= useState({
    title: '',
    da: 0,
    url: '',
    contact:''
  })
  
  const onChange =(e: ChangeEvent<HTMLInputElement>)=>{
    const {name,value}= e.target
    
      setNewSite({...newSite,[name]:value})
  }
  

  const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
    setSiteList([...siteList,{...newSite,id:Math.random()}])
  }
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        maxWidth: 600,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        mt: 4,
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        Add / Edit Entry
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            Title
          </Typography>
          <TextField
            fullWidth
            name="title"
            value={newSite.title}
            onChange={onChange}
            placeholder="Enter title"
            required
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            Domain Authority (DA)
          </Typography>
          <TextField
            fullWidth
            name="da"
            type="number"
            value={newSite.da}
            onChange={onChange}
            placeholder="Enter DA"
            required
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            URL
          </Typography>
          <TextField
            fullWidth
            name="url"
            value={newSite.url}
            onChange={onChange}
            placeholder="Enter website URL"
            required
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            Contact Details
          </Typography>
          <TextField
            fullWidth
            name="contact"
            value={newSite.contact}
            onChange={onChange}
            multiline
            rows={3}
            placeholder="Enter contact details"
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AddNewSite
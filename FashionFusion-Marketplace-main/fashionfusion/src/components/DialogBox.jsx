
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

const DialogBox = ({ open , handleClose , imageUrl }) => {
  return (
<Dialog open={open} onClose={handleClose}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <img className='w-64 h-56' src={imageUrl} alt="" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogBox

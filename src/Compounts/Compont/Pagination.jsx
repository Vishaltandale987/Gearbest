import React from 'react'
import { Button, ButtonGroup,Container  } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon,ArrowRightIcon,ArrowLeftIcon } from '@chakra-ui/icons'

function Pagination({perPage,nextPage,page}) {
  return (
    < Container >
    <ButtonGroup>
     
      <Button data-cy="pagination-first-button"  size='sm' colorScheme='orange' onClick={perPage}><ArrowLeftIcon/></Button>
      <Button   size='sm' colorScheme='gray' > <b>{page} </b> </Button>

      
      <Button size='sm' colorScheme='orange' onClick={nextPage}>  <ArrowRightIcon/></Button>
      
    </ButtonGroup>
    </ Container >
  )
}

export default Pagination

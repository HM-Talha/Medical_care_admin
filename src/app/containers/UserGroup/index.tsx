import { Button, Card, Grid, Modal, TextField, Typography } from '@mui/material'
import DataTable from 'app/components/DataTable';
import { CustomDrawer } from 'app/components/Drawer'
import React, { useState } from 'react'
import Topbar from '../Dashboard/components/topbar'
import { useStyles } from './styles';
import Addbtn from "../UserGroup/assets/Buttonplus.png";
import { useNavigate } from 'react-router-dom';


const userDetailList = [
  {
    groupName: 'Me and Mom',
    numberOfAssignedUsers: '0',


  },
  {
    groupName: 'Me',
    numberOfAssignedUsers: '1',



  }, {
    groupName: 'Me and Mom',
    numberOfAssignedUsers: '2',



  }, {
    groupName: 'Me and Mom',
    numberOfAssignedUsers: '3',



  }, {
    groupName: 'Me',
    numberOfAssignedUsers: '1',


  }, {
    groupName: 'Me and Mom',
    numberOfAssignedUsers: '2',


}
,  {groupName:'Me and Mom',
numberOfAssignedUsers:'0',


},
// {groupName:'Me',
// numberOfAssignedUsers:'1',



// },{groupName:'Me and Mom',
// numberOfAssignedUsers:'2',



// },{groupName:'Me and Mom',
// numberOfAssignedUsers:'3',



// },{groupName:'Me',
// numberOfAssignedUsers:'1',


// },{groupName:'Me and Mom',
// numberOfAssignedUsers:'2',


// }
]



const columnTable=[
    {
        label:'',
        width:'30%'
    },
    {
        id:'groupName',
        label:'Group Name',
        align:'left',
        width:'100%',
    },{
        id:'numberOfAssignedUsers',
        label:'Number of Assigned Users',
        align:'left',
    },]


const UserGroup=()=>{

    
    const [openModal, setOpenModal] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const navigate = useNavigate();

  const styles = useStyles()

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleModal = () => {
    setOpenModal(true)
  }

const handleDelete = () => {
    setOpenDelete(true);
  };
  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

    return(
        
        <Grid className={styles.mainContainer}>
        {/* <Grid item xs={2}> */}
          <CustomDrawer />
        {/* </Grid> */}
        <Grid item xs={12}>
          <Topbar />
          <div className={styles.root}>
          <div style={{width:'100%'}}>
              <DataTable
              loading={false}
              //orderDirection={orderDirection}
              //orderField={orderField}
              setQuery={() => { }}
              rows={userDetailList}
              columns={columnTable}
              Actions="Edit,Delete"
              page="userGroup"
            //   showSelect={true}
              editAction={(item)=>{
                console.log('item',item);
                
                navigate(`/users-group/user-group-details?groupName=${item?.groupName}`)
              }}
              deleteAction={handleDelete}
            />
          </div>

          <div className={styles.btnDiv}>
            <Button onClick={handleModal}>
              <img height="45px" src={Addbtn}></img>
            </Button>
            <Modal
              open={openDelete}
              onClose={handleDeleteClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Card className={styles.deleteModal}>
                <div className={styles.modalContainer}>
                  <Grid>
                    <Typography align="center" className={styles.headerModal}>
                      Delete User
                    </Typography>
                  </Grid>
                  <Grid sx={{ padding: "30px 0px" }}>
                    <Typography align="center" className={styles.deleteTypo}>
                      Do you really want to delete user?
                    </Typography>
                  </Grid>

                  <div>
                    <Grid container spacing={3}>
                      <Grid
                        className={styles.btnContainer}
                        container
                        item
                        xs={6}
                        direction="column"
                      >
                        <Button
                          className={styles.cancelBtn}
                          variant="outlined"
                          onClick={handleDeleteClose}
                        >
                          Cancel
                        </Button>
                      </Grid>
                      <Grid container item xs={6} direction="column">
                        <Button className={styles.saveBtn} variant="contained">
                          Delete
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Card>
            </Modal>
            <Modal
              open={openModal}
              onClose={handleModalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Card className={styles.addModal}>
                <div className={styles.modalContainer}>
                  <Grid>
                    <Typography align="center" className={styles.headerModal}>
                      Add Group
                    </Typography>
                  </Grid>
                <div style={{display:'flex',flexDirection:'row',marginTop:20,marginBottom:40}}>
                  <div >
                    <div >Group name</div>
                  <TextField
                    margin="dense"
                    required
                    size="small"
                    id="username"
                    placeholder={'Enter Group name'}
                    name="username"
                    autoComplete={"off"}
                    className={styles.textFieldStyle}
                    autoFocus
                    />
                </div>
                <div >
                    <div >Number of Users</div>
                  <TextField
                    margin="dense"
                    required
                    size="small"
                    id="username"
                    placeholder={'Enter Number of Users'}
                    name="username"
                    autoComplete={"off"}
                    className={styles.textFieldStyle}
                    autoFocus
                    />
                </div>

                </div>
                 
                  <div>
                    <Grid container spacing={3} marginTop="10px">
                      <Grid
                        className={styles.btnContainer}
                        container
                        item
                        xs={6}
                        direction="column"
                      >
                        <Button
                          className={styles.cancelBtn}
                          variant="outlined"
                          onClick={handleModalClose}
                        >
                          Cancel
                        </Button>
                      </Grid>
                      <Grid container item xs={6} direction="column">
                        <Button className={styles.saveBtn} variant="contained">
                          Save
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Card>
            </Modal>
          </div>
        </div>
      </Grid>

    </Grid>
  )
}

export default UserGroup

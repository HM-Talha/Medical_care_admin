import { Button, Card, Grid, Modal, TextField, Typography } from '@mui/material'
import DataTable from 'app/components/DataTable';
import { CustomDrawer } from 'app/components/Drawer'
import React, { useEffect, useState } from 'react'
import Topbar from '../Dashboard/components/topbar'
import { useStyles } from './styles';
import Addbtn from "../UserGroup/assets/Buttonplus.png";
import { useLocation, useNavigate } from 'react-router-dom';
import Back from "./assets/Back.png";



const userDetailList=[
    {featureName:'Me and Mom',
    numberOfAssignedUsers:'0',


},
{featureName:'Me',
numberOfAssignedUsers:'1',



},{featureName:'Me and Mom',
numberOfAssignedUsers:'2',



},{featureName:'Me and Mom',
numberOfAssignedUsers:'3',



},{featureName:'Me',
numberOfAssignedUsers:'1',


},{featureName:'Me and Mom',
numberOfAssignedUsers:'2',


}
,  {featureName:'Me and Mom',
numberOfAssignedUsers:'0',


},
{featureName:'Me',
numberOfAssignedUsers:'1',



},{featureName:'Me and Mom',
numberOfAssignedUsers:'2',



},{featureName:'Me and Mom',
numberOfAssignedUsers:'3',



},{featureName:'Me',
numberOfAssignedUsers:'1',


},{featureName:'Me and Mom',
numberOfAssignedUsers:'2',


}
]



const columnTable=[
    {
        id:'featureName',
        label:'Feature Name',
        align:'left',
        width:'723px'
        // position:{textAlign:'right'}
    
    },{
        id:'noAccess',
        label:'No Access',
        type:'radio'
        // align:'center',
        // position:{textAlign:'right'}
    },{
        id:'readOnly',
        label:'Read Only',
        type:'radio'
        // align:'center',
        // position:{textAlign:'right'}
    },{
        id:'fullAccess',
        label:'Full Access',
        type:'radio'
        // align:'center',
        // position:{textAlign:'right'}
    },]


const UserGroupDetails=({route}:any)=>{
    console.log('route',route);
    const [openModal, setOpenModal] = useState(false);
    const [groupName,setGroupName]=useState<string>('')
    const navigate=useNavigate()
    const params = useLocation();

    const styles=useStyles()

    const handleModalClose = () => {
        setOpenModal(false);
      };

const handleModal=()=>{
    setOpenModal(true)
}


useEffect(()=>{
    setGroupName(params?.search?.split("=")[1])
},[groupName])

    return(
        
        <Grid className={styles.mainContainer}>
        {/* <Grid item xs={2}> */}
          <CustomDrawer />
        {/* </Grid> */}
        <Grid item xs={12}>
          <Topbar />
          <div className={styles.root}>
          <Grid>
            <div className={styles.mainHeader}>
              <img
                src={Back}
                className={styles.imgClass}
                onClick={() => navigate(-1)}
              />
              <Typography className={styles.textHeader}>Users Group/ </Typography>
              
                <Typography className={styles.textHeaderT}>
                 User Group Details
                </Typography>
              
            </div>
          </Grid>
          <Grid item xs={2} style={{ width: "20%" }}>
              <label className={styles.label}>Group Name</label>
              <TextField
              disabled={true}
                variant="outlined"
                fullWidth
                margin="dense"
                required
                autoComplete={"off"}
                autoFocus
                placeholder="Enter Last Name"
                className={styles.textEnabled}
                value={groupName}
              />
            </Grid>
          <div style={{width:'100%',marginBottom:'40px'}}>
              <DataTable
              loading={false}
              //orderDirection={orderDirection}
              //orderField={orderField}
              setQuery={()=>{}}
              rows={userDetailList}
              columns={columnTable}
            //   Actions="Edit,Delete"
              page="userGroup"
            //   showSelect={true}
              editAction={()=>{}}
              deleteAction={()=>{}}
              onRowDoubleClick={()=>{console.log('entry');
              }}
            />
            </div>

            <Grid
            container
            columnGap={3}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Grid>
              <Button
                className={styles.cancelBtn}
                // onClick={() => navigate(-1)}
                variant="outlined"
              >
                Cancel
              </Button>
            </Grid>
            <Grid>
              <Button className={styles.saveBtn} variant="contained">
                Save
              </Button>
            </Grid>
          </Grid>

            {/* <div className={styles.btnDiv}>
            <Button onClick={handleModal}>
              <img height="45px" src={Addbtn}></img>
            </Button>
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
                <div style={{display:'flex',flexDirection:'row',marginTop:20,marginBottom:'40px'}}>
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
          </div> */}
            </div>
        </Grid>
   
      </Grid>
    )
}

export default UserGroupDetails

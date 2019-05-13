import React from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Card from '../CatagoryComponents/Card/Card'
import Chart from '../Chart/Chart'
import InputField from '../CatagoryComponents/InputField/InputField'

class modal extends React.Component {
  state = {
    open: false,
    allDeaths: [],
    years: [],
    numberOfYears: [],
    numberOfDeaths: [],
    race: [],
    numberOfDeathsByRace: [],
    numberOfRace: [],
    totalDeaths: 0,
    maleDeaths: 0,
    femaleDeaths: 0,
    selectedValue: 'Year',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    axios.get('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD', {
    }).then(res => {
      this.setState({ allDeaths: [], numberOfDeaths: [], numberOfYears: [], numberOfRace: [], maleDeaths: 0, femaleDeaths: 0 })
      res.data.data.map(item => {
        if (item.includes(this.props.causesOfDeath)) {
            this.state.allDeaths.push(item)
        }
      })  
      this.state.allDeaths.map(item => {
        if (item[10] === "M" || item[10] === "Male") {
          this.state.maleDeaths += 1
        } else {
          this.state.femaleDeaths += 1
        }
      })
      this.state.allDeaths.map(item => {
        this.setState(prevState => ({
          numberOfYears: [...prevState.numberOfYears, item[8]]
        }))
      })
      this.state.years.map(year => {
        this.setState(prevState => ({
          numberOfDeaths: [...prevState.numberOfDeaths, this.state.numberOfYears.filter(y => y === year).length]
        }))
      })
      this.state.allDeaths.map(item => {
        this.setState(prevState => ({
          numberOfRace: [...prevState.numberOfRace, item[11]]
        }))
      })
      this.state.race.map(race => {
        this.setState(prevState => ({
          numberOfDeathsByRace: [...prevState.numberOfDeathsByRace, this.state.numberOfRace.filter(r => r === race).length]
        }))
      })
      // console.log(this.state.numberOfDeathsByRace)
    }).catch(e => {
        console.log(e)
    })
  };

  componentDidMount() {
    axios.get('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD', {
    }).then(res => {
        res.data.meta.view.columns[8].cachedContents.top.map((item, index) => {
            this.setState(prevState => ({
                years: [...prevState.years, item.item]
            }))
        })
        res.data.meta.view.columns[11].cachedContents.top.map((item, index) => {
          this.setState(prevState => ({
              race: [...prevState.race, item.item]
          }))
      })
    }).catch(e => {
        console.log(e)
    })
}

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {

    return (
      <div>
        <Card 
        onClick={this.handleClickOpen}
        image={this.props.image}
        imageTitle={this.props.imageTitle}
        title={this.props.title}
        info={this.props.info}/>
        <Dialog
          fullWidth
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.causesOfDeath}</DialogTitle>
          <DialogContent>
            <DialogContent id="alert-dialog-description">
              <Chart 
              years={this.state.years}
              numberOfDeaths={this.state.numberOfDeaths}
              />
              <DialogContentText id="alert-dialog-description">
              Total Death: {this.state.allDeaths.length }
            </DialogContentText> 
            <DialogContentText id="alert-dialog-description">
              Total Male Deaths: {this.state.maleDeaths}
            </DialogContentText> 
            <DialogContentText id="alert-dialog-description"> 
              Total Female Deaths: {this.state.femaleDeaths}
            </DialogContentText> 
            </DialogContent>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default modal;
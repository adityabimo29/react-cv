import React,{Component} from 'react';
import { Button , Row ,Container , Col  } from 'reactstrap';


class Counter extends Component {

  constructor(props){
    super();
    this.state = {
      count : 0
    }
  }

  addNumber = () => {
    this.setState({count : this.state.count + 1 });
  }

  remNumber = () => {
    if(this.state.count > 0) {
        this.setState({count : this.state.count - 1 });
    }
  }

  resetNumber = () => {
    this.setState({count : 0 });
  }


  render(){
    return (
      <Container>
        <Row>
          <Col className='text-center py-5' md={{size:4,offset:4}}>
            <h3 className='alert alert-info'>{this.state.count}</h3>
            <Button className='mr-3' type="submit" color="info" onClick={this.addNumber}>Tambah</Button> 
            <Button className='mr-3' type="submit" color="danger" onClick={this.remNumber}>Hapus</Button>
            <Button type="submit" color="warning" onClick={this.resetNumber}>Reset</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Counter;
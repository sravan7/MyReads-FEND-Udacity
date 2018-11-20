import React,{Component} from 'react';

class noMatch extends Component{
  render(){
    return (
      <div className="not-found">
        <h3>404: Not Found</h3>
        <img src={require('./icons/tenor.gif')} alt="not Found GIF" />
      </div>
    )
  }
}

export default noMatch

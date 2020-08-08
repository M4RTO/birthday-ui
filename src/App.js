import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from "react-bootstrap/Badge";
import './App.scss';
class App extends React.Component {
 render() {
  return(
   <div>
    <Button variant="primary">
     Profile <Badge variant="light">9</Badge>
     <span className="sr-only">unread messages</span>
    </Button>
   </div>
  );
 }
}
export default App

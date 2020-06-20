import React from 'react';

import './TodoListItem.css'


// const TodoListItemFunc = (props) => {

//     const style ={
//         color: props.important? 'red': 'black',
//         fontSize: '24px',
//     }
    
// return ( 
//     <div className="TodoListItem" style={style}>
//         <span>{props.text}</span>
//         <div>
//             <button className="btn btn-outline-danger remove-btn">
//                 <i className="fa fa-trash"></i>
//             </button>
//             <button className="btn btn-outline-primary">
//                 <i className="fa fa-exclamation"></i>
//             </button>
//         </div>
//     </div>
//     );
// }


export default class TodoListItem extends React.Component {


state = {
        done:false,
        important:false,
};

onLabelClick = () => {
    this.setState({
        done: true,
    })
}

render(){

    const{ done }=this.state;
    const{ important, text }= this.props;

    let classNames = `TodoListItem`;

    if(done){
        classNames+=' done'
    }

    if(important){
        classNames+=' important';
    }
    
return ( 
    <div className={classNames}>
        <span onClick={this.onLabelClick}>
            {text}
        </span>
        <div>
            <button className="btn btn-outline-danger remove-btn">
                <i className="fa fa-trash"></i>
            </button>
            <button className="btn btn-outline-primary">
                <i className="fa fa-exclamation"></i>
            </button>
        </div>
    </div>
    );
}


}

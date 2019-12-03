import React from 'react'
import styles from './style.scss'



class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            date:[4,12],
            todolist:[
            {color:'blue',name:'計算機系統管理  作業'},
            {color:'blue',name:'計算機圖學  作業'},
            {color:'red',name:'日文 （三） 小考'}]
        }
    }

    deletealllist(){
        this.setState({todolist:[]});
        console.log(this.state.todolist);
    }

    deletethislist(id){
        var test=this.state.todolist;
        test.splice(id,1)
        this.setState({todolist:test})
        console.log(test);
    }

    addlist(){
        var test=
        [{color:'blue',name:'計算機系統管理  作業'},
        {color:'blue',name:'計算機圖學  作業'},
        {color:'red',name:'日文 （三） 小考'}];
        this.setState({todolist:test})
    }

    render() {
        
        const List=({color,title,id})=>(
            <div style={{background:'white',height:'24%',display:'flex',
            flexDirection:'row',alignItems:'center',
            justifyContent:'Space-Around'}}>
                <div style={{background:color,width:'11%',height:'50%',
                borderRadius:'20%'}}/>
                <div style={{background:'white',width:'70%'}}>
                {title}
                </div>
                <img 
                src={"http://localhost:8080/src/components/todolist/trash.png"} 
                style={{height:'80%',cursor:'pointer'}} onClick={(e)=>this.deletethislist(id)}/>
            </div>
        );

        let listshow=[];

        for (let i=0;i<this.state.todolist.length;i++){
            listshow.push(<List title={this.state.todolist[i].name} 
                color={this.state.todolist[i].color} id={i}></List>)
        }

        return(
            <div className={styles.Container}>

                <div className={styles.Title}>
                    <div className={styles.Text}>
                        {this.state.date[0]} / {this.state.date[1]}
                    </div>
                    <div className={styles.Text} onClick={(e)=>this.deletealllist()}>
                        X
                    </div>
                </div>

                <div className={styles.Lists}>
                    {listshow}
                </div>

                <div style={{background:'white',width:'100%',
                height:'16%',display:'flex',
                alignItems:'center',justifyContent:'flex-end',
                paddingRight:'3%',cursor:'pointer'}}>
                    <img 
                    src={'http://localhost:8080/src/components/todolist/add.png'} 
                    style={{height:'80%'}}
                    onClick={(e)=>this.addlist()}/>
                </div>

            </div>
        )
    }
}

export default ToDoList
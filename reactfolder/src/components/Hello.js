import React from 'react'

const Hello = () => {
    //return (
        //<div>
            //<h1>Hello Renuka</h1>
        //</div>
    //)

    
    return React.createElement('div',{id:'hello', class:'dummy Class'}, 
    React.createElement('h1',null,'Hello Renuka'))
    
}

export default Hello
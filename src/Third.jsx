import React , {Fragment , useEffect, useState} from 'react'; 
import { PermissionConsumer } from './Hooks';
function fetchData(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve({var:'codigoMagico'});
        },2000)
    });
}

export default () => {
    const [name] = useState('third');
    const [codigoMagico , setCodigoMagico ] = useState('sdsd');

    useEffect(() => {
        fetchData().then(data =>{
            setCodigoMagico(data.var);
        })
    });

    return(
    <PermissionConsumer name={name} type="typo">
        <Fragment>
            <button>
                {name}{codigoMagico}
            </button>
        </Fragment>
    </PermissionConsumer>  );
};
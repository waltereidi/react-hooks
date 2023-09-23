
import React from 'react'; 
import { PermissionConsumer } from './Hooks';

export default () => (
    <PermissionConsumer name="second">
        <div>
            <button>
                Second
            </button>
        </div>
    </PermissionConsumer>  
);
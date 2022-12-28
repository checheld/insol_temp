import React from 'react';
import {dsnCN} from "../../hooks/helper";

function AddressFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-address' , className)} {...restProps}>
            <p>
                Armenia, Yerevan, <br/>
                59 Komitas Ave
            </p>
        </div>
    );
}

export default AddressFooter;